# better-auth-razorpay-plugin

Razorpay primitives for Better Auth plugins.

## Install

```sh
npm install better-auth-razorpay-plugin razorpay
```

## Server setup

```ts
import { betterAuth } from "better-auth";
import { razorpayPlugin } from "better-auth-razorpay-plugin";
import Razorpay from "razorpay";

export const auth = betterAuth({
  plugins: [
    razorpayPlugin({
      razorpayClient: new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_KEY_SECRET!,
      }),
      keySecret: process.env.RAZORPAY_KEY_SECRET!,
      razorpayWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET!,
      createCustomerOnSignUp: true,
      subscription: {
        enabled: true,
        plans: [
          {
            planId: "plan_monthly",
            annualPlanId: "plan_yearly",
            name: "pro",
            totalCount: 12,
          },
        ],
      },
    }),
  ],
});
```

## Client setup

```ts
import { createAuthClient } from "better-auth/client";
import { razorpayClientPlugin } from "better-auth-razorpay-plugin/client";

export const authClient = createAuthClient({
  plugins: [razorpayClientPlugin()],
});
```

## Scope

This package exposes both one-time payment primitives and a subscription layer:

- one-time orders, payment fetch, capture, refund, and Checkout signature verification
- Razorpay customers: create, edit, list, fetch
- Razorpay plans: create, list, fetch
- subscriptions: upgrade/create, list, get, update, cancel, pause, resume, restore
- Razorpay subscription utilities: create link, pending update, cancel update, invoices, offers
- webhook endpoint at `/razorpay/webhook` for subscription lifecycle events
- Better Auth schema for `razorpayCustomerId` and local subscription records

## Client usage

```ts
const order = await authClient.razorpay.createOrder({
  amount: 50000,
  currency: "INR",
  receipt: "receipt_001",
});

const verification = await authClient.razorpay.verifyPayment({
  razorpayOrderId: "order_...",
  razorpayPaymentId: "pay_...",
  razorpaySignature: "signature_from_checkout",
});

const payment = await authClient.razorpay.payment({
  query: {
    id: "pay_...",
  },
});
```

`amount` is passed to Razorpay in the smallest currency unit, for example paise for INR.
For INR orders, Razorpay requires at least `100` subunits. Notes are limited to 15
key-value pairs, with keys and string values up to 256 characters.

## Webhooks

Razorpay recommends using webhooks for payment automation and API polling only when
you need immediate user-facing confirmation. Webhook signatures must be verified
against the raw request body, not a parsed JSON object.

```ts
import { verifyRazorpayWebhookSignature } from "better-auth-razorpay-plugin";

const valid = verifyRazorpayWebhookSignature(
  rawBody,
  request.headers.get("x-razorpay-signature") ?? "",
  process.env.RAZORPAY_WEBHOOK_SECRET!,
);
```

## Development

```sh
npm install
npm run typecheck
npm run build
npm test
```
