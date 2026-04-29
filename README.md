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
- React Query helper hooks through `better-auth-razorpay-plugin/react`

Not exact Stripe parity:

- no Stripe-style Billing Portal equivalent; Razorpay does not provide the same hosted portal primitive
- no Stripe Checkout Session abstraction; Razorpay uses Orders/Checkout and Subscription authorization links
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

## React Query Helpers

React Query helpers are available from the optional `./react` export. Install
React Query in your app before using these hooks.

```tsx
import {
  useSubscriptionList,
  useUpgradeSubscription,
} from "better-auth-razorpay-plugin/react";

export function BillingSettings({ authClient }: { authClient: any }) {
  useSubscriptionList(authClient);
  const upgrade = useUpgradeSubscription(authClient);

  return (
    <button
      type="button"
      onClick={() => upgrade.mutate({ plan: "pro", annual: true })}
      disabled={upgrade.isPending}
    >
      Upgrade
    </button>
  );
}
```

## Subscription Control

The subscription layer supports create/upgrade, cancellation, scheduled
cancellation, pause/resume, update, restore, and pending-update inspection.
Plan creation accepts Razorpay's documented `daily`, `weekly`, `monthly`,
`quarterly`, and `yearly` periods.

```ts
// Create or upgrade a subscription. Returns the local subscription row and
// the Razorpay subscription, including the Razorpay `short_url` when present.
await authClient.subscription.upgrade({
  plan: "pro",
  annual: true,
});

// Cancel immediately.
await authClient.subscription.cancel({
  cancelAtCycleEnd: false,
});

// Schedule cancellation for the cycle end.
await authClient.subscription.cancel({
  cancelAtCycleEnd: true,
});

// Restore only clears the local pending-cancel flag. Razorpay does not expose
// a Stripe-style "undo scheduled cancellation" API for this path.
await authClient.subscription.restore({});
```

The raw subscription-link endpoint also forwards Razorpay's documented optional
fields for delayed starts, link expiry, upfront add-ons, offers, notification
control, and notification contact details: `startAt`, `expireBy`, `addons`,
`offerId`, `customerNotify`, and `notifyInfo`.

For organization or workspace billing, configure `subscription.authorizeReference`.
The middleware requires it whenever `customerType: "organization"` is used, and
also when callers pass a user-level `referenceId` different from the current
user id.

```ts
razorpayPlugin({
  // ...
  subscription: {
    enabled: true,
    plans: [{ planId: "plan_monthly", name: "pro" }],
    async authorizeReference({ user, referenceId, action }) {
      return user.id === referenceId || action === "list-subscription";
    },
    async getSubscriptionCreateParams({ plan }) {
      return {
        customer_notify: 1,
        notes: { plan: plan.name },
      };
    },
  },
});
```

## Subscription Callbacks

Subscription state changes should be driven from Razorpay webhooks. The plugin
routes webhook events to typed callbacks on `subscription`.

```ts
razorpayPlugin({
  // ...
  subscription: {
    enabled: true,
    plans: [{ planId: "plan_monthly", name: "pro" }],
    async onSubscriptionActivated({ subscription, razorpaySubscription }) {
      // Grant access after the first successful payment.
    },
    async onSubscriptionCharged({ subscription }) {
      // Recurring charge succeeded.
    },
    async onSubscriptionRenewed({ subscription }) {
      // Recurring charge after the first payment.
    },
    async onSubscriptionPending({ subscription }) {
      // Payment retry is pending.
    },
    async onSubscriptionHalted({ subscription }) {
      // Retries exhausted or payment issue requires attention.
    },
    async onSubscriptionCancelled({ subscription }) {
      // Revoke or schedule access removal.
    },
  },
  async onEvent(event) {
    // Optional catch-all for every verified Razorpay webhook event.
  },
});
```

Available callbacks include `onSubscriptionAuthenticated`,
`onSubscriptionActivated`, `onSubscriptionCharged`, `onSubscriptionRenewed`,
`onSubscriptionPending`, `onSubscriptionHalted`, `onSubscriptionUpdated`,
`onSubscriptionPaused`, `onSubscriptionResumed`, `onSubscriptionCancelled`, and
`onSubscriptionCompleted`.

`amount` is passed to Razorpay in the smallest currency unit, for example paise for INR.
For INR orders, Razorpay requires at least `100` subunits. Notes are limited to 15
key-value pairs, with keys and string values up to 256 characters.

## Webhooks

Razorpay recommends using webhooks for payment automation and API polling only when
you need immediate user-facing confirmation. Webhook signatures must be verified
against the raw request body, not a parsed JSON object.
Razorpay can deliver duplicate events and does not guarantee event ordering; the
plugin verifies signatures and dispatches callbacks, but durable idempotency is
app-owned. Persist the `x-razorpay-event-id` header in your app if duplicate
processing would cause side effects.

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
