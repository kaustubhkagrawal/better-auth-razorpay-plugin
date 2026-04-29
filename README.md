# better-auth-razorpay-plugin

Razorpay payments and subscriptions for Better Auth.

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

## Stripe Reference Parity

This plugin was modeled after the Better Auth Stripe plugin architecture, but it
is not a one-to-one copy because Razorpay and Stripe expose different billing
primitives.

Covered from the Stripe plugin pattern:

- Better Auth plugin/client plugin structure
- customer IDs stored on Better Auth users and organizations
- local subscription table managed through Better Auth schema
- subscription lifecycle endpoints and webhook handlers
- organization subscriptions with `authorizeReference`
- organization seat quantity syncing
- internal metadata/notes that cannot be overridden by caller input
- webhook-first subscription state updates
- unit tests for schema, metadata/notes, utilities, and webhook handlers

Razorpay-specific additions:

- one-time order creation and Checkout signature verification
- payment capture and refund helpers
- Razorpay plan/customer/subscription provider endpoints
- Razorpay subscription links, offers, pending updates, and invoices
- raw-body `X-Razorpay-Signature` webhook verification

Not exact Stripe parity:

- no Stripe-style Billing Portal equivalent; Razorpay does not provide the same hosted portal primitive
- no Stripe Checkout Session abstraction; Razorpay uses Orders/Checkout and Subscription authorization links
- no React Query hooks export yet
- no live Razorpay integration tests; the test suite uses unit tests and mocked Better Auth/Razorpay behavior

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

## Credits

This package uses the Better Auth Stripe plugin as the main architectural
reference for plugin shape, schema design, client inference, subscription
lifecycle handling, metadata safety, and test coverage patterns.

The Razorpay subscription/customer/schema/webhook layer was also adapted from
the community package
[`iamjasonkendrick/better-auth-razorpay`](https://github.com/iamjasonkendrick/better-auth-razorpay),
with changes for this package name, Better Auth 1.6.x, one-time payments,
raw-body webhook verification, safer notes merging, and additional tests.

## Development

```sh
npm install
npm run typecheck
npm run build
npm test
```
