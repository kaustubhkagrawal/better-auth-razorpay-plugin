# Razorpay implementation notes

Checked against Razorpay docs on 2026-04-29.

Sources:

- https://razorpay.com/docs/api/orders/create/
- https://razorpay.com/docs/payments/server-integration/go/integration-steps/
- https://razorpay.com/docs/webhooks/validate-test/
- https://github.com/iamjasonkendrick/better-auth-razorpay

## Orders

- Create orders server-side using `/v1/orders`.
- Required request fields are `amount` and `currency`.
- `amount` is in currency subunits. For INR, Razorpay documents a minimum of INR 1.00, so the plugin rejects INR amounts below `100`.
- `receipt` is optional, unique by merchant reference, and limited to 40 characters.
- `notes` supports up to 15 key-value pairs, each up to 256 characters.
- `first_payment_min_amount` should only be sent when `partial_payment` is true.

## Checkout signature verification

- Checkout returns `razorpay_payment_id`, `razorpay_order_id`, and `razorpay_signature`.
- The server must compute `hmac_sha256(order_id + "|" + razorpay_payment_id, key_secret)` and compare it to `razorpay_signature`.
- Signature verification only proves the checkout response came from Razorpay. Payment status still needs to be confirmed by webhook, Dashboard/API status, or polling.

## Webhooks

- Razorpay sends the webhook signature in `X-Razorpay-Signature`.
- Webhook verification uses HMAC-SHA256 with the webhook secret as the key and the raw request body as the message.
- The raw request body must not be parsed or cast before signature verification.
- Duplicate webhook events should be deduped with the `x-razorpay-event-id` header.
- Webhook event order is not guaranteed.

## Stripe resource comparison

`resources/stripe.md` influenced the implementation in these concrete ways:

- Expose `version` on the Better Auth plugin.
- Keep provider-specific error messages centralized.
- Sanitize user-controlled metadata-like objects before passing them to the provider.
- Treat webhooks as the reliable automation mechanism, with synchronous API verification as a supplement.

The subscription/customer/schema/webhook layer was also adapted from the MIT-licensed
community package `iamjasonkendrick/better-auth-razorpay`, with local changes for
this package name, Better Auth 1.6.x, one-time orders/payments, raw-body webhook
verification, and safer notes merging.
