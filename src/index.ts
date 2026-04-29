import type { BetterAuthPlugin } from "better-auth";
import { APIError, createAuthEndpoint, sessionMiddleware } from "better-auth/api";
import * as z from "zod";

import { RAZORPAY_ERROR_CODES } from "./error-codes.js";
import { sanitizeRazorpayNotes } from "./notes.js";
import {
  createRazorpayClient,
  serializeRazorpayPayment,
  serializeRazorpayOrder,
  toRazorpayOrderInput,
} from "./razorpay.js";
import { verifyRazorpayPaymentSignature } from "./signature.js";
import type { RazorpayPluginOptions } from "./types.js";
import { PACKAGE_VERSION } from "./version.js";

export { RAZORPAY_ERROR_CODES } from "./error-codes.js";
export {
  createRazorpayPaymentSignature,
  createRazorpayWebhookSignature,
  verifyRazorpayPaymentSignature,
  verifyRazorpayWebhookSignature,
} from "./signature.js";
export type {
  CreateRazorpayOrderInput,
  RazorpayNotes,
  RazorpayOrderResponse,
  RazorpayPaymentResponse,
  RazorpayPluginOptions,
  VerifyRazorpayPaymentInput,
  VerifyRazorpayPaymentResponse,
} from "./types.js";

const notesSchema = z
  .record(z.string().max(256), z.union([z.string().max(256), z.number()]))
  .refine((notes) => Object.keys(notes).length <= 15, {
    message: "Razorpay notes can contain at most 15 key-value pairs.",
  });

const createOrderBodySchema = z.object({
  amount: z.number().int().positive(),
  currency: z.string().length(3).toUpperCase().optional(),
  receipt: z.string().min(1).max(40).optional(),
  notes: notesSchema.optional(),
  partialPayment: z.boolean().optional(),
  firstPaymentMinAmount: z.number().int().positive().optional(),
}).superRefine((body, ctx) => {
  const currency = body.currency ?? "INR";

  if (currency === "INR" && body.amount < 100) {
    ctx.addIssue({
      code: "custom",
      message: RAZORPAY_ERROR_CODES.INVALID_ORDER_AMOUNT,
      path: ["amount"],
    });
  }

  if (body.firstPaymentMinAmount !== undefined && body.partialPayment !== true) {
    ctx.addIssue({
      code: "custom",
      message: RAZORPAY_ERROR_CODES.INVALID_PARTIAL_PAYMENT,
      path: ["firstPaymentMinAmount"],
    });
  }
});

const orderQuerySchema = z.object({
  id: z.string().min(1),
});

const paymentQuerySchema = z.object({
  id: z.string().min(1),
});

const verifyPaymentBodySchema = z.object({
  razorpayOrderId: z.string().min(1),
  razorpayPaymentId: z.string().min(1),
  razorpaySignature: z.string().min(1),
});

export const razorpayPlugin = (options: RazorpayPluginOptions) => {
  const defaultCurrency = options.defaultCurrency ?? "INR";
  const useSession = options.requireSession === false ? [] : [sessionMiddleware];
  const razorpay = createRazorpayClient(options);

  return {
    id: "razorpay",
    version: PACKAGE_VERSION,
    endpoints: {
      createRazorpayOrder: createAuthEndpoint(
        "/razorpay/create-order",
        {
          method: "POST",
          body: createOrderBodySchema,
          use: useSession,
        },
        async (ctx) => {
          const body = {
            ...ctx.body,
            notes: sanitizeRazorpayNotes(ctx.body.notes),
          };
          const order = await razorpay.orders.create(
            toRazorpayOrderInput(body, defaultCurrency),
          );

          return ctx.json(serializeRazorpayOrder(order));
        },
      ),
      getRazorpayOrder: createAuthEndpoint(
        "/razorpay/order",
        {
          method: "GET",
          query: orderQuerySchema,
          use: useSession,
        },
        async (ctx) => {
          const order = await razorpay.orders.fetch(ctx.query.id);

          return ctx.json(serializeRazorpayOrder(order));
        },
      ),
      getRazorpayPayment: createAuthEndpoint(
        "/razorpay/payment",
        {
          method: "GET",
          query: paymentQuerySchema,
          use: useSession,
        },
        async (ctx) => {
          const payment = await razorpay.payments.fetch(ctx.query.id);

          return ctx.json(serializeRazorpayPayment(payment));
        },
      ),
      verifyRazorpayPayment: createAuthEndpoint(
        "/razorpay/verify-payment",
        {
          method: "POST",
          body: verifyPaymentBodySchema,
          use: useSession,
        },
        async (ctx) => {
          const valid = verifyRazorpayPaymentSignature(
            ctx.body.razorpayOrderId,
            ctx.body.razorpayPaymentId,
            ctx.body.razorpaySignature,
            options.keySecret,
          );

          if (!valid) {
            throw new APIError("BAD_REQUEST", {
              message: RAZORPAY_ERROR_CODES.INVALID_PAYMENT_SIGNATURE,
            });
          }

          return ctx.json({ valid });
        },
      ),
    },
  } satisfies BetterAuthPlugin;
};
