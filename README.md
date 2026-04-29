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

export const auth = betterAuth({
  plugins: [
    razorpayPlugin({
      keyId: process.env.RAZORPAY_KEY_ID!,
      keySecret: process.env.RAZORPAY_KEY_SECRET!,
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
