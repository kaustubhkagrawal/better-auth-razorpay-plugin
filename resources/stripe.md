Directory structure:
└── stripe/
    ├── README.md
    ├── CHANGELOG.md
    ├── package.json
    ├── tsconfig.json
    ├── tsdown.config.ts
    ├── vitest.config.ts
    ├── src/
    │   ├── client.ts
    │   ├── error-codes.ts
    │   ├── hooks.ts
    │   ├── index.ts
    │   ├── metadata.ts
    │   ├── middleware.ts
    │   ├── schema.ts
    │   ├── types.ts
    │   ├── utils.ts
    │   └── version.ts
    └── test/
        ├── metadata.test.ts
        ├── seat-based-billing.test.ts
        └── utils.test.ts


Files Content:

================================================
FILE: packages/stripe/README.md
================================================
# Better Auth Stripe Plugin

Stripe plugin for [Better Auth](https://www.better-auth.com) — integrate Stripe billing with your authentication system.

## Installation

```bash
npm install @better-auth/stripe
```

## Documentation

For full documentation, visit [better-auth.com/docs/plugins/stripe](https://www.better-auth.com/docs/plugins/stripe).

## License

MIT



================================================
FILE: packages/stripe/CHANGELOG.md
================================================
# @better-auth/stripe

## 1.6.9

### Patch Changes

- Updated dependencies [[`815ecf6`](https://github.com/better-auth/better-auth/commit/815ecf62b6f6c5bf656ab55da393ce63d7eed0a6)]:
  - @better-auth/core@1.6.9
  - better-auth@1.6.9

## 1.6.8

### Patch Changes

- Updated dependencies [[`856ab24`](https://github.com/better-auth/better-auth/commit/856ab2426c0dce7377ee1ca26dbb7d9e52fb6429), [`9aa8e63`](https://github.com/better-auth/better-auth/commit/9aa8e63de84549634216e13e407cf6d8aa61acc3)]:
  - better-auth@1.6.8
  - @better-auth/core@1.6.8

## 1.6.7

### Patch Changes

- Updated dependencies [[`307196a`](https://github.com/better-auth/better-auth/commit/307196a405e067f4a863de2ed68528e8d4bdc162), [`4a180f0`](https://github.com/better-auth/better-auth/commit/4a180f0b0c084c59e7b006058d3fdbd8542face5), [`4f373ee`](https://github.com/better-auth/better-auth/commit/4f373eed8a42e02460dbd2ee9973b9493cea04eb), [`e1b1cfc`](https://github.com/better-auth/better-auth/commit/e1b1cfc7a262c8bf0c383a7b2b1d140472d33e56), [`d053a45`](https://github.com/better-auth/better-auth/commit/d053a4583e0db9132e52a100ae33e13d040a6bae)]:
  - better-auth@1.6.7
  - @better-auth/core@1.6.7

## 1.6.6

### Patch Changes

- Updated dependencies [[`b5742f9`](https://github.com/better-auth/better-auth/commit/b5742f9d08d7c6ae0848279b79c8bcc0a09082d7), [`4debfb6`](https://github.com/better-auth/better-auth/commit/4debfb600ff448f3e63ed242a2fb5a2c41654be1), [`9ea7eb1`](https://github.com/better-auth/better-auth/commit/9ea7eb1eab28d50d40836ab4e2cbe5a81c4da1aa), [`a844c7d`](https://github.com/better-auth/better-auth/commit/a844c7dd087715678787cb10bf9670fad46e535b), [`ab4c10f`](https://github.com/better-auth/better-auth/commit/ab4c10fbc09defcd851d614acecc111cc114b543), [`a61083e`](https://github.com/better-auth/better-auth/commit/a61083e023163d0a14d9e886ce556ba459677428), [`e64ff72`](https://github.com/better-auth/better-auth/commit/e64ff720fb8514cb78aedd1660223d8b948284da)]:
  - @better-auth/core@1.6.6
  - better-auth@1.6.6

## 1.6.5

### Patch Changes

- Updated dependencies [[`938dd80`](https://github.com/better-auth/better-auth/commit/938dd80e2debfab7f7ef480792a5e63876e779d9), [`0538627`](https://github.com/better-auth/better-auth/commit/05386271ca143d07416297611d3b31e6c20e2f2a)]:
  - better-auth@1.6.5
  - @better-auth/core@1.6.5

## 1.6.4

### Patch Changes

- Updated dependencies [[`9aed910`](https://github.com/better-auth/better-auth/commit/9aed910499eb4cbc3dd0c395ff5534893daab7a4), [`acbd6ef`](https://github.com/better-auth/better-auth/commit/acbd6ef69f88ea54174446ac0465a426bad7ca09), [`39d6af2`](https://github.com/better-auth/better-auth/commit/39d6af2a392dc41018a036d1d909dc48c09749c9)]:
  - better-auth@1.6.4
  - @better-auth/core@1.6.4

## 1.6.3

### Patch Changes

- [#9164](https://github.com/better-auth/better-auth/pull/9164) [`390a031`](https://github.com/better-auth/better-auth/commit/390a03190c988776e53c5e64cf6c2f60db1c5415) Thanks [@gustavovalverde](https://github.com/gustavovalverde)! - fix(stripe): drop unsafe keys when merging user-supplied metadata

  The Stripe plugin previously merged `ctx.body.metadata` through `defu`, which was vulnerable to prototype pollution when attacker-controlled `__proto__` keys reached the second argument. Since Stripe metadata is a flat `Record<string, string>`, the deep-merge was never exercised on that path. The merge now ignores `__proto__`, `constructor`, and `prototype`, so the user-controlled surface no longer depends on `defu`. The remaining `defu` call sites (deep-merging developer-supplied `CustomerCreateParams`) also receive the patched range.

- Updated dependencies [[`5142e9c`](https://github.com/better-auth/better-auth/commit/5142e9cec55825eb14da0f14022ae02d3c9dfd45), [`484ce6a`](https://github.com/better-auth/better-auth/commit/484ce6a262c39b9c1be91d37774a2a13de3a5a1f), [`f875897`](https://github.com/better-auth/better-auth/commit/f8758975ae475429d56b34aa6067e304ee973c8f), [`6ce30cf`](https://github.com/better-auth/better-auth/commit/6ce30cf13853619b9022e93bd6ecb956bc32482d), [`f6428d0`](https://github.com/better-auth/better-auth/commit/f6428d02fcabc2e628f39b0e402f1a6eb0602649), [`9a6d475`](https://github.com/better-auth/better-auth/commit/9a6d4759cd4451f0535d53f171bcfc8891c41db7), [`513dabb`](https://github.com/better-auth/better-auth/commit/513dabb132e2c08a5b6d3b7e88dd397fcd66c1af), [`c5066fe`](https://github.com/better-auth/better-auth/commit/c5066fe5d68babf2376cfc63d813de5542eca463), [`5f84335`](https://github.com/better-auth/better-auth/commit/5f84335815d75410320bdfa665a6712d3416b04f)]:
  - better-auth@1.6.3
  - @better-auth/core@1.6.3

## 1.6.2

### Patch Changes

- Updated dependencies [[`9deb793`](https://github.com/better-auth/better-auth/commit/9deb7936aba7931f2db4b460141f476508f11bfd), [`2cbcb9b`](https://github.com/better-auth/better-auth/commit/2cbcb9baacdd8e6fa1ed605e9b788f8922f0a8c2), [`b20fa42`](https://github.com/better-auth/better-auth/commit/b20fa424c379396f0b86f94fbac1604e4a17fe19), [`608d8c3`](https://github.com/better-auth/better-auth/commit/608d8c3082c2d6e52c6ca6a8f38348619869b1ae), [`8409843`](https://github.com/better-auth/better-auth/commit/84098432ad8432fe33b3134d933e574259f3430a), [`e78a7b1`](https://github.com/better-auth/better-auth/commit/e78a7b120d56b7320cc8d818270e20057963a7b2)]:
  - better-auth@1.6.2
  - @better-auth/core@1.6.2

## 1.6.1

### Patch Changes

- Updated dependencies [[`2e537df`](https://github.com/better-auth/better-auth/commit/2e537df5f7f2a4263f52cce74d7a64a0a947792b), [`f61ad1c`](https://github.com/better-auth/better-auth/commit/f61ad1cab7360e4460e6450904e97498298a79d5), [`7495830`](https://github.com/better-auth/better-auth/commit/749583065958e8a310badaa5ea3acc8382dc0ca2)]:
  - better-auth@1.6.1
  - @better-auth/core@1.6.1

## 1.6.0

### Minor Changes

- [#8836](https://github.com/better-auth/better-auth/pull/8836) [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33) Thanks [@gustavovalverde](https://github.com/gustavovalverde)! - Add optional version field to the plugin interface and expose version from all built-in plugins

### Patch Changes

- [#8836](https://github.com/better-auth/better-auth/pull/8836) [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33) Thanks [@gustavovalverde](https://github.com/gustavovalverde)! - Return correct priceId for annual subscriptions in list

- Updated dependencies [[`dd537cb`](https://github.com/better-auth/better-auth/commit/dd537cbdeb618abe9e274129f1670d0c03e89ae5), [`bd9bd58`](https://github.com/better-auth/better-auth/commit/bd9bd58f8768b2512f211c98c227148769d533c5), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`5dd9e44`](https://github.com/better-auth/better-auth/commit/5dd9e44c041839bf269056cb246fd617abe6cd33), [`469eee6`](https://github.com/better-auth/better-auth/commit/469eee6d846b32a43f36b418868e6a4c916382dc), [`560230f`](https://github.com/better-auth/better-auth/commit/560230f751dfc5d6efc8f7f3f12e5970c9ba09ea)]:
  - better-auth@1.6.0
  - @better-auth/core@1.6.0

## 1.6.0-beta.0

### Minor Changes

- [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b) Thanks [@gustavovalverde](https://github.com/gustavovalverde)! - Add optional version field to the plugin interface and expose version from all built-in plugins

### Patch Changes

- [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b) Thanks [@gustavovalverde](https://github.com/gustavovalverde)! - Return correct priceId for annual subscriptions in list

- Updated dependencies [[`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b), [`28b1291`](https://github.com/better-auth/better-auth/commit/28b1291a86d726b8f2602bf1f4898451cf7c195b)]:
  - better-auth@1.6.0-beta.0
  - @better-auth/core@1.6.0-beta.0



================================================
FILE: packages/stripe/package.json
================================================
{
  "name": "@better-auth/stripe",
  "version": "1.6.9",
  "description": "Stripe plugin for Better Auth",
  "type": "module",
  "license": "MIT",
  "homepage": "https://www.better-auth.com/docs/plugins/stripe",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/better-auth/better-auth.git",
    "directory": "packages/stripe"
  },
  "author": "Bereket Engida",
  "keywords": [
    "stripe",
    "auth",
    "payments",
    "typescript",
    "better-auth"
  ],
  "publishConfig": {
    "access": "public"
  },
  "sideEffects": false,
  "scripts": {
    "build": "tsdown",
    "dev": "tsdown --watch",
    "lint:package": "publint run --strict --pack false",
    "lint:types": "attw --profile esm-only --pack .",
    "typecheck": "tsc --project tsconfig.json",
    "test": "vitest",
    "coverage": "vitest run --coverage --coverage.provider=istanbul"
  },
  "files": [
    "dist"
  ],
  "main": "./dist/index.mjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.mts",
  "exports": {
    ".": {
      "dev-source": "./src/index.ts",
      "types": "./dist/index.d.mts",
      "default": "./dist/index.mjs"
    },
    "./client": {
      "dev-source": "./src/client.ts",
      "types": "./dist/client.d.mts",
      "default": "./dist/client.mjs"
    }
  },
  "typesVersions": {
    "*": {
      "*": [
        "./dist/index.d.mts"
      ],
      "client": [
        "./dist/client.d.mts"
      ]
    }
  },
  "dependencies": {
    "defu": "^6.1.5",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@better-auth/core": "workspace:*",
    "better-auth": "workspace:*",
    "better-call": "catalog:",
    "stripe": "^22.0.1",
    "tsdown": "catalog:"
  },
  "peerDependencies": {
    "@better-auth/core": "workspace:^",
    "better-auth": "workspace:^",
    "better-call": "catalog:",
    "stripe": "^18 || ^19 || ^20 || ^21 || ^22"
  }
}



================================================
FILE: packages/stripe/tsconfig.json
================================================
{
  "extends": "../../tsconfig.base.json",
  "include": ["./src", "./package.json"],
  "compilerOptions": {
    "lib": ["esnext", "dom", "dom.iterable"]
  },
  "references": [
    {
      "path": "../better-auth/tsconfig.json"
    },
    {
      "path": "../core/tsconfig.json"
    }
  ]
}



================================================
FILE: packages/stripe/tsdown.config.ts
================================================
import { defineConfig } from "tsdown";

export default defineConfig({
	dts: { build: true, incremental: true },
	format: ["esm"],
	entry: ["./src/index.ts", "./src/client.ts"],
	treeshake: true,
});



================================================
FILE: packages/stripe/vitest.config.ts
================================================
import { defineProject } from "vitest/config";

export default defineProject({
	test: {
		clearMocks: true,
		restoreMocks: true,
		globals: true,
		testTimeout: 10_000,
	},
});



================================================
FILE: packages/stripe/src/client.ts
================================================
import type { BetterAuthClientPlugin } from "better-auth/client";
import { STRIPE_ERROR_CODES } from "./error-codes";
import type { StripePlan, stripe } from "./index";
import { PACKAGE_VERSION } from "./version";

export const stripeClient = <
	O extends {
		subscription: boolean;
	},
>(
	options?: O | undefined,
) => {
	return {
		id: "stripe-client",
		version: PACKAGE_VERSION,
		$InferServerPlugin: {} as ReturnType<
			typeof stripe<
				O["subscription"] extends true
					? {
							stripeClient: any;
							stripeWebhookSecret: string;
							subscription: {
								enabled: true;
								plans: StripePlan[];
							};
						}
					: {
							stripeClient: any;
							stripeWebhookSecret: string;
						}
			>
		>,
		pathMethods: {
			"/subscription/billing-portal": "POST",
			"/subscription/restore": "POST",
		},
		$ERROR_CODES: STRIPE_ERROR_CODES,
	} satisfies BetterAuthClientPlugin;
};
export * from "./error-codes";



================================================
FILE: packages/stripe/src/error-codes.ts
================================================
import { defineErrorCodes } from "@better-auth/core/utils/error-codes";

export const STRIPE_ERROR_CODES = defineErrorCodes({
	UNAUTHORIZED: "Unauthorized access",
	INVALID_REQUEST_BODY: "Invalid request body",
	SUBSCRIPTION_NOT_FOUND: "Subscription not found",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Subscription plan not found",
	ALREADY_SUBSCRIBED_PLAN: "You're already subscribed to this plan",
	REFERENCE_ID_NOT_ALLOWED: "Reference id is not allowed",
	CUSTOMER_NOT_FOUND: "Stripe customer not found for this user",
	UNABLE_TO_CREATE_CUSTOMER: "Unable to create customer",
	UNABLE_TO_CREATE_BILLING_PORTAL: "Unable to create billing portal session",
	STRIPE_SIGNATURE_NOT_FOUND: "Stripe signature not found",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Stripe webhook secret not found",
	STRIPE_WEBHOOK_ERROR: "Stripe webhook error",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Failed to construct Stripe event",
	FAILED_TO_FETCH_PLANS: "Failed to fetch plans",
	EMAIL_VERIFICATION_REQUIRED:
		"Email verification is required before you can subscribe to a plan",
	SUBSCRIPTION_NOT_ACTIVE: "Subscription is not active",
	/**
	 * @deprecated Use `SUBSCRIPTION_NOT_PENDING_CHANGE` instead.
	 */
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Subscription is not scheduled for cancellation",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Subscription has no pending cancellation or scheduled plan change",
	ORGANIZATION_NOT_FOUND: "Organization not found",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Organization subscription is not enabled",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Organization subscriptions require authorizeReference callback to be configured",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Cannot delete organization with active subscription",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"Reference ID is required. Provide referenceId or set activeOrganizationId in session",
});



================================================
FILE: packages/stripe/src/hooks.ts
================================================
import type { GenericEndpointContext } from "@better-auth/core";
import type { User } from "@better-auth/core/db";
import type { Organization } from "better-auth/plugins/organization";
import type Stripe from "stripe";
import { subscriptionMetadata } from "./metadata";
import type { CustomerType, StripeOptions, Subscription } from "./types";
import {
	isActiveOrTrialing,
	isPendingCancel,
	isStripePendingCancel,
	resolvePlanItem,
	resolveQuantity,
} from "./utils";

/**
 * Find organization or user by stripeCustomerId.
 * @internal
 */
async function findReferenceByStripeCustomerId(
	ctx: GenericEndpointContext,
	options: StripeOptions,
	stripeCustomerId: string,
): Promise<{ customerType: CustomerType; referenceId: string } | null> {
	if (options.organization?.enabled) {
		const org = await ctx.context.adapter.findOne<Organization>({
			model: "organization",
			where: [{ field: "stripeCustomerId", value: stripeCustomerId }],
		});
		if (org) return { customerType: "organization", referenceId: org.id };
	}

	const user = await ctx.context.adapter.findOne<User>({
		model: "user",
		where: [{ field: "stripeCustomerId", value: stripeCustomerId }],
	});
	if (user) return { customerType: "user", referenceId: user.id };

	return null;
}

export async function onCheckoutSessionCompleted(
	ctx: GenericEndpointContext,
	options: StripeOptions,
	event: Stripe.Event,
) {
	try {
		const client = options.stripeClient;
		const checkoutSession = event.data.object as Stripe.Checkout.Session;
		if (checkoutSession.mode === "setup" || !options.subscription?.enabled) {
			return;
		}
		const subscription = await client.subscriptions.retrieve(
			checkoutSession.subscription as string,
		);
		const resolved = await resolvePlanItem(options, subscription.items.data);
		if (!resolved) {
			ctx.context.logger.warn(
				`Stripe webhook warning: Subscription ${subscription.id} has no items matching a configured plan`,
			);
			return;
		}

		const { item: subscriptionItem, plan } = resolved;
		if (plan) {
			const checkoutMeta = subscriptionMetadata.get(checkoutSession?.metadata);
			const referenceId =
				checkoutSession?.client_reference_id || checkoutMeta.referenceId;
			const { subscriptionId } = checkoutMeta;
			const seats = resolveQuantity(
				subscription.items.data,
				subscriptionItem,
				plan.seatPriceId,
			);
			if (referenceId && subscriptionId) {
				const trial =
					subscription.trial_start && subscription.trial_end
						? {
								trialStart: new Date(subscription.trial_start * 1000),
								trialEnd: new Date(subscription.trial_end * 1000),
							}
						: {};

				let dbSubscription = await ctx.context.adapter.update<Subscription>({
					model: "subscription",
					update: {
						...trial,
						plan: plan.name.toLowerCase(),
						status: subscription.status,
						updatedAt: new Date(),
						periodStart: new Date(subscriptionItem.current_period_start * 1000),
						periodEnd: new Date(subscriptionItem.current_period_end * 1000),
						stripeSubscriptionId: checkoutSession.subscription as string,
						cancelAtPeriodEnd: subscription.cancel_at_period_end,
						cancelAt: subscription.cancel_at
							? new Date(subscription.cancel_at * 1000)
							: null,
						canceledAt: subscription.canceled_at
							? new Date(subscription.canceled_at * 1000)
							: null,
						endedAt: subscription.ended_at
							? new Date(subscription.ended_at * 1000)
							: null,
						seats: seats,
						billingInterval: subscriptionItem.price.recurring?.interval,
					},
					where: [
						{
							field: "id",
							value: subscriptionId,
						},
					],
				});

				if (trial.trialStart && plan.freeTrial?.onTrialStart) {
					await plan.freeTrial.onTrialStart(dbSubscription as Subscription);
				}

				if (!dbSubscription) {
					dbSubscription = await ctx.context.adapter.findOne<Subscription>({
						model: "subscription",
						where: [
							{
								field: "id",
								value: subscriptionId,
							},
						],
					});
				}
				await options.subscription?.onSubscriptionComplete?.(
					{
						event,
						subscription: dbSubscription as Subscription,
						stripeSubscription: subscription,
						plan,
					},
					ctx,
				);
				return;
			}
		}
	} catch (e: any) {
		ctx.context.logger.error(`Stripe webhook failed. Error: ${e.message}`);
	}
}

export async function onSubscriptionCreated(
	ctx: GenericEndpointContext,
	options: StripeOptions,
	event: Stripe.Event,
) {
	try {
		if (!options.subscription?.enabled) {
			return;
		}

		const stripeSubscriptionCreated = event.data.object as Stripe.Subscription;
		const stripeCustomerId = stripeSubscriptionCreated.customer?.toString();
		if (!stripeCustomerId) {
			ctx.context.logger.warn(
				`Stripe webhook warning: customer.subscription.created event received without customer ID`,
			);
			return;
		}

		// Check if subscription already exists in database
		const { subscriptionId } = subscriptionMetadata.get(
			stripeSubscriptionCreated.metadata,
		);
		const existingSubscription =
			await ctx.context.adapter.findOne<Subscription>({
				model: "subscription",
				where: subscriptionId
					? [{ field: "id", value: subscriptionId }]
					: [
							{
								field: "stripeSubscriptionId",
								value: stripeSubscriptionCreated.id,
							},
						], // Probably won't match since it's not set yet
			});
		if (existingSubscription) {
			ctx.context.logger.info(
				`Stripe webhook: Subscription already exists in database (id: ${existingSubscription.id}), skipping creation`,
			);
			return;
		}

		// Find reference
		const reference = await findReferenceByStripeCustomerId(
			ctx,
			options,
			stripeCustomerId,
		);
		if (!reference) {
			ctx.context.logger.warn(
				`Stripe webhook warning: No user or organization found with stripeCustomerId: ${stripeCustomerId}`,
			);
			return;
		}
		const { referenceId, customerType } = reference;

		const resolved = await resolvePlanItem(
			options,
			stripeSubscriptionCreated.items.data,
		);
		if (!resolved) {
			ctx.context.logger.warn(
				`Stripe webhook warning: Subscription ${stripeSubscriptionCreated.id} has no items matching a configured plan`,
			);
			return;
		}

		const { item: subscriptionItem, plan } = resolved;
		if (!plan) {
			ctx.context.logger.warn(
				`Stripe webhook warning: No matching plan found for priceId: ${subscriptionItem.price.id}`,
			);
			return;
		}

		const seats = resolveQuantity(
			stripeSubscriptionCreated.items.data,
			subscriptionItem,
			plan.seatPriceId,
		);
		const periodStart = new Date(subscriptionItem.current_period_start * 1000);
		const periodEnd = new Date(subscriptionItem.current_period_end * 1000);

		const trial =
			stripeSubscriptionCreated.trial_start &&
			stripeSubscriptionCreated.trial_end
				? {
						trialStart: new Date(stripeSubscriptionCreated.trial_start * 1000),
						trialEnd: new Date(stripeSubscriptionCreated.trial_end * 1000),
					}
				: {};

		// Create the subscription in the database
		const newSubscription = await ctx.context.adapter.create<Subscription>({
			model: "subscription",
			data: {
				...trial,
				...(plan.limits ? { limits: plan.limits } : {}),
				referenceId,
				stripeCustomerId,
				stripeSubscriptionId: stripeSubscriptionCreated.id,
				status: stripeSubscriptionCreated.status,
				plan: plan.name.toLowerCase(),
				periodStart,
				periodEnd,
				seats,
				billingInterval: subscriptionItem.price.recurring?.interval,
			},
		});

		ctx.context.logger.info(
			`Stripe webhook: Created subscription ${stripeSubscriptionCreated.id} for ${customerType} ${referenceId} from dashboard`,
		);

		await options.subscription.onSubscriptionCreated?.({
			event,
			subscription: newSubscription,
			stripeSubscription: stripeSubscriptionCreated,
			plan,
		});
	} catch (error: any) {
		ctx.context.logger.error(`Stripe webhook failed. Error: ${error}`);
	}
}

export async function onSubscriptionUpdated(
	ctx: GenericEndpointContext,
	options: StripeOptions,
	event: Stripe.Event,
) {
	try {
		if (!options.subscription?.enabled) {
			return;
		}
		const stripeSubscriptionUpdated = event.data.object as Stripe.Subscription;
		const resolved = await resolvePlanItem(
			options,
			stripeSubscriptionUpdated.items.data,
		);
		if (!resolved) {
			ctx.context.logger.warn(
				`Stripe webhook warning: Subscription ${stripeSubscriptionUpdated.id} has no items matching a configured plan`,
			);
			return;
		}

		const { item: subscriptionItem, plan } = resolved;

		const { subscriptionId } = subscriptionMetadata.get(
			stripeSubscriptionUpdated.metadata,
		);
		const customerId = stripeSubscriptionUpdated.customer?.toString();
		let subscription = await ctx.context.adapter.findOne<Subscription>({
			model: "subscription",
			where: subscriptionId
				? [{ field: "id", value: subscriptionId }]
				: [
						{
							field: "stripeSubscriptionId",
							value: stripeSubscriptionUpdated.id,
						},
					],
		});
		if (!subscription) {
			const subs = await ctx.context.adapter.findMany<Subscription>({
				model: "subscription",
				where: [{ field: "stripeCustomerId", value: customerId }],
			});
			if (subs.length > 1) {
				const activeSub = subs.find((sub: Subscription) =>
					isActiveOrTrialing(sub),
				);
				if (!activeSub) {
					ctx.context.logger.warn(
						`Stripe webhook error: Multiple subscriptions found for customerId: ${customerId} and no active subscription is found`,
					);
					return;
				}
				subscription = activeSub;
			} else {
				subscription = subs[0]!;
			}
		}

		const seats = plan
			? resolveQuantity(
					stripeSubscriptionUpdated.items.data,
					subscriptionItem,
					plan.seatPriceId,
				)
			: subscriptionItem.quantity;

		const trial =
			stripeSubscriptionUpdated.trial_start &&
			stripeSubscriptionUpdated.trial_end
				? {
						trialStart: new Date(stripeSubscriptionUpdated.trial_start * 1000),
						trialEnd: new Date(stripeSubscriptionUpdated.trial_end * 1000),
					}
				: {};

		const subscriptionUpdated = await ctx.context.adapter.update<Subscription>({
			model: "subscription",
			update: {
				...trial,
				...(plan
					? {
							plan: plan.name.toLowerCase(),
							limits: plan.limits,
						}
					: {}),
				updatedAt: new Date(),
				status: stripeSubscriptionUpdated.status,
				periodStart: new Date(subscriptionItem.current_period_start * 1000),
				periodEnd: new Date(subscriptionItem.current_period_end * 1000),
				cancelAtPeriodEnd: stripeSubscriptionUpdated.cancel_at_period_end,
				cancelAt: stripeSubscriptionUpdated.cancel_at
					? new Date(stripeSubscriptionUpdated.cancel_at * 1000)
					: null,
				canceledAt: stripeSubscriptionUpdated.canceled_at
					? new Date(stripeSubscriptionUpdated.canceled_at * 1000)
					: null,
				endedAt: stripeSubscriptionUpdated.ended_at
					? new Date(stripeSubscriptionUpdated.ended_at * 1000)
					: null,
				seats,
				stripeSubscriptionId: stripeSubscriptionUpdated.id,
				billingInterval: subscriptionItem.price.recurring?.interval,
				stripeScheduleId: stripeSubscriptionUpdated.schedule
					? typeof stripeSubscriptionUpdated.schedule === "string"
						? stripeSubscriptionUpdated.schedule
						: stripeSubscriptionUpdated.schedule.id
					: null,
			},
			where: [
				{
					field: "id",
					value: subscription.id,
				},
			],
		});
		// Practically unreachable. A null here means the row was deleted between the read above and this update.
		if (!subscriptionUpdated) {
			ctx.context.logger.warn(
				`Stripe webhook warning: Subscription ${subscription.id} update returned no row (likely deleted concurrently), skipping callbacks`,
			);
			return;
		}

		const isNewCancellation =
			stripeSubscriptionUpdated.status === "active" &&
			isStripePendingCancel(stripeSubscriptionUpdated) &&
			!isPendingCancel(subscription);
		if (isNewCancellation) {
			await options.subscription.onSubscriptionCancel?.({
				event,
				subscription: subscriptionUpdated,
				stripeSubscription: stripeSubscriptionUpdated,
				cancellationDetails:
					stripeSubscriptionUpdated.cancellation_details || undefined,
			});
		}
		await options.subscription.onSubscriptionUpdate?.({
			event,
			subscription: subscriptionUpdated,
			stripeSubscription: stripeSubscriptionUpdated,
		});
		if (plan) {
			if (
				stripeSubscriptionUpdated.status === "active" &&
				subscription.status === "trialing" &&
				plan.freeTrial?.onTrialEnd
			) {
				await plan.freeTrial.onTrialEnd(
					{ subscription: subscriptionUpdated },
					ctx,
				);
			}
			if (
				stripeSubscriptionUpdated.status === "incomplete_expired" &&
				subscription.status === "trialing" &&
				plan.freeTrial?.onTrialExpired
			) {
				await plan.freeTrial.onTrialExpired(subscriptionUpdated, ctx);
			}
		}
	} catch (error: any) {
		ctx.context.logger.error(`Stripe webhook failed. Error: ${error}`);
	}
}

export async function onSubscriptionDeleted(
	ctx: GenericEndpointContext,
	options: StripeOptions,
	event: Stripe.Event,
) {
	if (!options.subscription?.enabled) {
		return;
	}
	try {
		const stripeSubscriptionDeleted = event.data.object as Stripe.Subscription;
		const subscriptionId = stripeSubscriptionDeleted.id;
		const subscription = await ctx.context.adapter.findOne<Subscription>({
			model: "subscription",
			where: [
				{
					field: "stripeSubscriptionId",
					value: subscriptionId,
				},
			],
		});
		if (subscription) {
			const trial =
				stripeSubscriptionDeleted.trial_start &&
				stripeSubscriptionDeleted.trial_end
					? {
							trialStart: new Date(
								stripeSubscriptionDeleted.trial_start * 1000,
							),
							trialEnd: new Date(stripeSubscriptionDeleted.trial_end * 1000),
						}
					: {};
			const subscriptionUpdated =
				await ctx.context.adapter.update<Subscription>({
					model: "subscription",
					where: [
						{
							field: "id",
							value: subscription.id,
						},
					],
					update: {
						...trial,
						status: "canceled",
						updatedAt: new Date(),
						cancelAtPeriodEnd: stripeSubscriptionDeleted.cancel_at_period_end,
						cancelAt: stripeSubscriptionDeleted.cancel_at
							? new Date(stripeSubscriptionDeleted.cancel_at * 1000)
							: null,
						canceledAt: stripeSubscriptionDeleted.canceled_at
							? new Date(stripeSubscriptionDeleted.canceled_at * 1000)
							: null,
						endedAt: stripeSubscriptionDeleted.ended_at
							? new Date(stripeSubscriptionDeleted.ended_at * 1000)
							: null,
						stripeScheduleId: null,
					},
				});
			// Practically unreachable. A null here means the row was deleted between the read above and this update.
			if (!subscriptionUpdated) {
				ctx.context.logger.warn(
					`Stripe webhook warning: Subscription ${subscription.id} update returned no row (likely deleted concurrently), skipping callbacks`,
				);
				return;
			}
			await options.subscription.onSubscriptionDeleted?.({
				event,
				stripeSubscription: stripeSubscriptionDeleted,
				subscription: subscriptionUpdated,
			});
		} else {
			ctx.context.logger.warn(
				`Stripe webhook error: Subscription not found for subscriptionId: ${subscriptionId}`,
			);
		}
	} catch (error: any) {
		ctx.context.logger.error(`Stripe webhook failed. Error: ${error}`);
	}
}



================================================
FILE: packages/stripe/src/index.ts
================================================
import type { BetterAuthPlugin, User } from "better-auth";
import { APIError } from "better-auth";
import type { Organization } from "better-auth/plugins/organization";
import { defu } from "defu";
import type Stripe from "stripe";
import { STRIPE_ERROR_CODES } from "./error-codes";
import { customerMetadata } from "./metadata";
import {
	cancelSubscription,
	createBillingPortal,
	listActiveSubscriptions,
	restoreSubscription,
	stripeWebhook,
	subscriptionSuccess,
	upgradeSubscription,
} from "./routes";
import { getSchema } from "./schema";
import type {
	StripeOptions,
	StripePlan,
	Subscription,
	WithStripeCustomerId,
} from "./types";
import { escapeStripeSearchValue, getPlans, isActiveOrTrialing } from "./utils";
import { PACKAGE_VERSION } from "./version";

declare module "@better-auth/core" {
	interface BetterAuthPluginRegistry<AuthOptions, Options> {
		stripe: {
			creator: typeof stripe;
		};
	}
}

export const stripe = <O extends StripeOptions>(options: O) => {
	const client = options.stripeClient;

	const subscriptionEndpoints = {
		upgradeSubscription: upgradeSubscription(options),
		cancelSubscription: cancelSubscription(options),
		restoreSubscription: restoreSubscription(options),
		listActiveSubscriptions: listActiveSubscriptions(options),
		subscriptionSuccess: subscriptionSuccess(options),
		createBillingPortal: createBillingPortal(options),
	};

	return {
		id: "stripe",
		version: PACKAGE_VERSION,
		endpoints: {
			stripeWebhook: stripeWebhook(options),
			...((options.subscription?.enabled
				? subscriptionEndpoints
				: {}) as O["subscription"] extends {
				enabled: true;
			}
				? typeof subscriptionEndpoints
				: {}),
		},
		init(ctx) {
			// Validate: seatPriceId requires organization to be enabled
			if (options.subscription?.enabled && !options.organization?.enabled) {
				const warnIfSeatPricing = (plans: StripePlan[]) => {
					if (plans.some((p) => p.seatPriceId)) {
						ctx.logger.error(
							"seatPriceId is configured on a plan but stripe organization option is not enabled. " +
								"Seat-based billing requires `organization: { enabled: true }` in stripe plugin options.",
						);
					}
				};
				const { plans } = options.subscription;
				if (typeof plans === "function") {
					void Promise.resolve(plans())
						.then(warnIfSeatPricing)
						.catch((e: any) => {
							ctx.logger.error(
								`Failed to resolve plans for seat pricing validation: ${e.message}`,
							);
						});
				} else {
					warnIfSeatPricing(plans);
				}
			}

			if (options.organization?.enabled) {
				const orgPlugin = ctx.getPlugin("organization");
				if (!orgPlugin) {
					ctx.logger.error(`Organization plugin not found`);
					return;
				}

				const existingHooks = orgPlugin.options.organizationHooks ?? {};

				/**
				 * Sync organization name to Stripe customer
				 */
				const afterUpdateStripeOrg = async (data: {
					organization: (Organization & WithStripeCustomerId) | null;
					user: User;
				}) => {
					const { organization } = data;
					if (!organization?.stripeCustomerId) return;

					try {
						const stripeCustomer = await client.customers.retrieve(
							organization.stripeCustomerId,
						);

						if (stripeCustomer.deleted) {
							ctx.logger.warn(
								`Stripe customer ${organization.stripeCustomerId} was deleted`,
							);
							return;
						}

						// Update Stripe customer if name changed
						if (organization.name !== stripeCustomer.name) {
							await client.customers.update(organization.stripeCustomerId, {
								name: organization.name,
							});
							ctx.logger.info(
								`Synced organization name to Stripe: "${stripeCustomer.name}" → "${organization.name}"`,
							);
						}
					} catch (e: any) {
						ctx.logger.error(
							`Failed to sync organization to Stripe: ${e.message}`,
						);
					}
				};

				/**
				 * Block deletion if organization has active subscriptions
				 */
				const beforeDeleteStripeOrg = async (data: {
					organization: Organization & WithStripeCustomerId;
					user: User;
				}) => {
					const { organization } = data;
					if (!organization.stripeCustomerId) return;

					try {
						// Check if organization has any active subscriptions
						const subscriptions = await client.subscriptions.list({
							customer: organization.stripeCustomerId,
							status: "all",
							limit: 100, // 1 ~ 100
						});
						for (const sub of subscriptions.data) {
							if (
								sub.status !== "canceled" &&
								sub.status !== "incomplete" &&
								sub.status !== "incomplete_expired"
							) {
								throw APIError.from(
									"BAD_REQUEST",
									STRIPE_ERROR_CODES.ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION,
								);
							}
						}
					} catch (error: any) {
						if (error instanceof APIError) {
							throw error;
						}
						ctx.logger.error(
							`Failed to check organization subscriptions: ${error.message}`,
						);
						throw error;
					}
				};

				/**
				 * Sync seat quantity to Stripe when organization members change.
				 * quantity = memberCount; Stripe graduated pricing handles free tiers.
				 */
				const syncSeatsAfterMemberChange = async (data: {
					organization: Organization & WithStripeCustomerId;
				}) => {
					if (
						!options.subscription?.enabled ||
						!data.organization?.stripeCustomerId
					) {
						return;
					}

					try {
						const memberCount = await ctx.adapter.count({
							model: "member",
							where: [
								{
									field: "organizationId",
									value: data.organization.id,
								},
							],
						});

						const plans = await getPlans(options.subscription);
						const seatPlans = plans.filter((p) => p.seatPriceId);
						if (seatPlans.length === 0) return;

						const seatPlanNames = new Set(
							seatPlans.map((p) => p.name.toLowerCase()),
						);
						const dbSub = await ctx.adapter.findOne<Subscription>({
							model: "subscription",
							where: [
								{
									field: "referenceId",
									value: data.organization.id,
								},
							],
						});
						if (
							!dbSub?.stripeSubscriptionId ||
							!isActiveOrTrialing(dbSub) ||
							!seatPlanNames.has(dbSub.plan)
						) {
							return;
						}

						const plan = seatPlans.find(
							(p) => p.name.toLowerCase() === dbSub.plan,
						)!;
						const { seatPriceId } = plan;

						const stripeSub = await client.subscriptions.retrieve(
							dbSub.stripeSubscriptionId,
						);
						if (!isActiveOrTrialing(stripeSub)) return;

						const seatItem = stripeSub.items.data.find(
							(item) => item.price.id === seatPriceId,
						);

						// Skip if no change needed
						if (seatItem?.quantity === memberCount) return;

						const items = seatItem
							? [{ id: seatItem.id, quantity: memberCount }]
							: [{ price: seatPriceId, quantity: memberCount }];

						await client.subscriptions.update(stripeSub.id, {
							items,
							proration_behavior: plan.prorationBehavior ?? "create_prorations",
						});
						await ctx.adapter.update({
							model: "subscription",
							update: { seats: memberCount },
							where: [{ field: "id", value: dbSub.id }],
						});
					} catch (e: any) {
						ctx.logger.error(`Failed to sync seats to Stripe: ${e.message}`);
					}
				};

				orgPlugin.options.organizationHooks = {
					...existingHooks,
					afterUpdateOrganization: existingHooks.afterUpdateOrganization
						? async (data) => {
								await existingHooks.afterUpdateOrganization!(data);
								await afterUpdateStripeOrg(data);
							}
						: afterUpdateStripeOrg,
					beforeDeleteOrganization: existingHooks.beforeDeleteOrganization
						? async (data) => {
								await existingHooks.beforeDeleteOrganization!(data);
								await beforeDeleteStripeOrg(data);
							}
						: beforeDeleteStripeOrg,
					afterAddMember: existingHooks.afterAddMember
						? async (data) => {
								await existingHooks.afterAddMember!(data);
								await syncSeatsAfterMemberChange(data);
							}
						: syncSeatsAfterMemberChange,
					afterRemoveMember: existingHooks.afterRemoveMember
						? async (data) => {
								await existingHooks.afterRemoveMember!(data);
								await syncSeatsAfterMemberChange(data);
							}
						: syncSeatsAfterMemberChange,
					afterAcceptInvitation: existingHooks.afterAcceptInvitation
						? async (data) => {
								await existingHooks.afterAcceptInvitation!(data);
								await syncSeatsAfterMemberChange(data);
							}
						: syncSeatsAfterMemberChange,
				};
			}

			return {
				options: {
					databaseHooks: {
						user: {
							create: {
								async after(user: User & WithStripeCustomerId, ctx) {
									if (
										!ctx ||
										!options.createCustomerOnSignUp ||
										user.stripeCustomerId // Skip if user already has a Stripe customer ID
									) {
										return;
									}

									try {
										// Check if user customer already exists in Stripe by email
										let stripeCustomer: Stripe.Customer | undefined;
										try {
											const result = await client.customers.search({
												query: `email:"${escapeStripeSearchValue(user.email)}" AND -metadata["${customerMetadata.keys.customerType}"]:"organization"`,
												limit: 1,
											});
											stripeCustomer = result.data[0];
										} catch {
											// Search API unavailable in some regions, so fall back to paginated list
											ctx.context.logger.warn(
												"Stripe customers.search failed, falling back to customers.list",
											);
											for await (const customer of client.customers.list({
												email: user.email,
												limit: 100,
											})) {
												if (
													customer.metadata?.[
														customerMetadata.keys.customerType
													] !== "organization"
												) {
													stripeCustomer = customer;
													break;
												}
											}
										}

										// If user customer exists, link it to prevent duplicate creation
										if (stripeCustomer) {
											await ctx.context.internalAdapter.updateUser(user.id, {
												stripeCustomerId: stripeCustomer.id,
											});
											await options.onCustomerCreate?.(
												{
													stripeCustomer,
													user: {
														...user,
														stripeCustomerId: stripeCustomer.id,
													},
												},
												ctx,
											);
											ctx.context.logger.info(
												`Linked existing Stripe customer ${stripeCustomer.id} to user ${user.id}`,
											);
											return;
										}

										// Create new Stripe customer
										let extraCreateParams: Partial<Stripe.CustomerCreateParams> =
											{};
										if (options.getCustomerCreateParams) {
											extraCreateParams = await options.getCustomerCreateParams(
												user,
												ctx,
											);
										}

										const params = defu(
											{
												email: user.email,
												name: user.name,
												metadata: customerMetadata.set(
													{
														userId: user.id,
														customerType: "user",
													},
													extraCreateParams?.metadata,
												),
											},
											extraCreateParams,
										);
										stripeCustomer = await client.customers.create(params);
										await ctx.context.internalAdapter.updateUser(user.id, {
											stripeCustomerId: stripeCustomer.id,
										});
										await options.onCustomerCreate?.(
											{
												stripeCustomer,
												user: {
													...user,
													stripeCustomerId: stripeCustomer.id,
												},
											},
											ctx,
										);
										ctx.context.logger.info(
											`Created new Stripe customer ${stripeCustomer.id} for user ${user.id}`,
										);
									} catch (e: any) {
										ctx.context.logger.error(
											`Failed to create or link Stripe customer: ${e.message}`,
											e,
										);
									}
								},
							},
							update: {
								async after(user: User & WithStripeCustomerId, ctx) {
									if (
										!ctx ||
										!user.stripeCustomerId // Only proceed if user has a Stripe customer ID
									)
										return;

									try {
										// Get the user from the database to check if email actually changed
										// The 'user' parameter here is the freshly updated user
										// We need to check if the Stripe customer's email matches
										const stripeCustomer = await client.customers.retrieve(
											user.stripeCustomerId,
										);

										// Check if customer was deleted
										if (stripeCustomer.deleted) {
											ctx.context.logger.warn(
												`Stripe customer ${user.stripeCustomerId} was deleted, cannot update email`,
											);
											return;
										}

										// If Stripe customer email doesn't match the user's current email, update it
										if (stripeCustomer.email !== user.email) {
											await client.customers.update(user.stripeCustomerId, {
												email: user.email,
											});
											ctx.context.logger.info(
												`Updated Stripe customer email from ${stripeCustomer.email} to ${user.email}`,
											);
										}
									} catch (e: any) {
										// Ignore errors - this is a best-effort sync
										// Email might have been deleted or Stripe customer might not exist
										ctx.context.logger.error(
											`Failed to sync email to Stripe customer: ${e.message}`,
											e,
										);
									}
								},
							},
						},
					},
				},
			};
		},
		schema: getSchema(options),
		options: options as NoInfer<O>,
		$ERROR_CODES: STRIPE_ERROR_CODES,
	} satisfies BetterAuthPlugin;
};

export type StripePlugin<O extends StripeOptions> = ReturnType<
	typeof stripe<O>
>;

export type * from "./types";



================================================
FILE: packages/stripe/src/metadata.ts
================================================
import type Stripe from "stripe";

type CustomerInternalMetadata =
	| { customerType: "user"; userId: string }
	| { customerType: "organization"; organizationId: string };

type SubscriptionInternalMetadata = {
	userId: string;
	subscriptionId: string;
	referenceId: string;
};

const UNSAFE_METADATA_KEYS = new Set(["__proto__", "constructor", "prototype"]);

/**
 * Merge flat Stripe metadata objects, giving `internalFields` final priority.
 * Drops reserved keys that could mutate the target's prototype chain.
 */
function mergeMetadata<Internal extends Record<string, string>>(
	internalFields: Internal,
	userMetadata: (Stripe.Emptyable<Stripe.MetadataParam> | undefined)[],
): Stripe.MetadataParam {
	const merged: Stripe.MetadataParam = {};
	for (const source of userMetadata) {
		if (!source) continue;
		for (const [key, value] of Object.entries(source)) {
			if (UNSAFE_METADATA_KEYS.has(key)) continue;
			merged[key] = value;
		}
	}
	for (const [key, value] of Object.entries(internalFields)) {
		merged[key] = value;
	}
	return merged;
}

export const customerMetadata = {
	keys: {
		userId: "userId",
		organizationId: "organizationId",
		customerType: "customerType",
	} as const,

	/**
	 * Create metadata with internal fields that cannot be overridden by user metadata.
	 */
	set(
		internalFields: CustomerInternalMetadata,
		...userMetadata: (Stripe.Emptyable<Stripe.MetadataParam> | undefined)[]
	): Stripe.MetadataParam {
		return mergeMetadata(internalFields, userMetadata);
	},

	/**
	 * Extract internal fields from Stripe metadata.
	 */
	get(metadata: Stripe.Metadata | null | undefined) {
		return {
			userId: metadata?.userId,
			organizationId: metadata?.organizationId,
			customerType: metadata?.customerType as
				| CustomerInternalMetadata["customerType"]
				| undefined,
		};
	},
};

export const subscriptionMetadata = {
	keys: {
		userId: "userId",
		subscriptionId: "subscriptionId",
		referenceId: "referenceId",
	} as const,

	/**
	 * Create metadata with internal fields that cannot be overridden by user metadata.
	 */
	set(
		internalFields: SubscriptionInternalMetadata,
		...userMetadata: (Stripe.Emptyable<Stripe.MetadataParam> | undefined)[]
	): Stripe.MetadataParam {
		return mergeMetadata(internalFields, userMetadata);
	},

	/**
	 * Extract internal fields from Stripe metadata.
	 */
	get(metadata: Stripe.Metadata | null | undefined) {
		return {
			userId: metadata?.userId,
			subscriptionId: metadata?.subscriptionId,
			referenceId: metadata?.referenceId,
		};
	},
};



================================================
FILE: packages/stripe/src/middleware.ts
================================================
import { createAuthMiddleware } from "@better-auth/core/api";
import { APIError } from "@better-auth/core/error";
import { sessionMiddleware } from "better-auth/api";
import { STRIPE_ERROR_CODES } from "./error-codes";
import type {
	AuthorizeReferenceAction,
	CustomerType,
	StripeCtxSession,
	SubscriptionOptions,
} from "./types";

export const stripeSessionMiddleware = createAuthMiddleware(
	{
		use: [sessionMiddleware],
	},
	async (ctx) => {
		const session = ctx.context.session as StripeCtxSession;
		return {
			session,
		};
	},
);

export const referenceMiddleware = (
	subscriptionOptions: SubscriptionOptions,
	action: AuthorizeReferenceAction,
) =>
	createAuthMiddleware(async (ctx) => {
		const ctxSession = ctx.context.session as StripeCtxSession;
		if (!ctxSession) {
			throw APIError.from("UNAUTHORIZED", STRIPE_ERROR_CODES.UNAUTHORIZED);
		}

		const customerType: CustomerType =
			ctx.body?.customerType || ctx.query?.customerType;
		const explicitReferenceId = ctx.body?.referenceId || ctx.query?.referenceId;

		if (customerType === "organization") {
			// Organization subscriptions always require authorizeReference
			if (!subscriptionOptions.authorizeReference) {
				ctx.context.logger.error(
					`Organization subscriptions require authorizeReference to be defined in your stripe plugin config.`,
				);
				throw APIError.from(
					"BAD_REQUEST",
					STRIPE_ERROR_CODES.AUTHORIZE_REFERENCE_REQUIRED,
				);
			}

			const referenceId =
				explicitReferenceId || ctxSession.session.activeOrganizationId;
			if (!referenceId) {
				throw APIError.from(
					"BAD_REQUEST",
					STRIPE_ERROR_CODES.ORGANIZATION_REFERENCE_ID_REQUIRED,
				);
			}
			const isAuthorized = await subscriptionOptions.authorizeReference(
				{
					user: ctxSession.user,
					session: ctxSession.session,
					referenceId,
					action,
				},
				ctx,
			);
			if (!isAuthorized) {
				throw APIError.from("UNAUTHORIZED", STRIPE_ERROR_CODES.UNAUTHORIZED);
			}
			return;
		}

		// User subscriptions - pass if no explicit referenceId
		if (!explicitReferenceId) {
			return;
		}

		// Pass if referenceId is user id
		if (explicitReferenceId === ctxSession.user.id) {
			return;
		}

		if (!subscriptionOptions.authorizeReference) {
			ctx.context.logger.error(
				`Passing referenceId into a subscription action isn't allowed if subscription.authorizeReference isn't defined in your stripe plugin config.`,
			);
			throw APIError.from(
				"BAD_REQUEST",
				STRIPE_ERROR_CODES.REFERENCE_ID_NOT_ALLOWED,
			);
		}
		const isAuthorized = await subscriptionOptions.authorizeReference(
			{
				user: ctxSession.user,
				session: ctxSession.session,
				referenceId: explicitReferenceId,
				action,
			},
			ctx,
		);
		if (!isAuthorized) {
			throw APIError.from("UNAUTHORIZED", STRIPE_ERROR_CODES.UNAUTHORIZED);
		}
	});



================================================
FILE: packages/stripe/src/schema.ts
================================================
import type { BetterAuthPluginDBSchema } from "@better-auth/core/db";
import { mergeSchema } from "better-auth/db";
import type { StripeOptions } from "./types";

export const subscriptions = {
	subscription: {
		fields: {
			plan: {
				type: "string",
				required: true,
			},
			referenceId: {
				type: "string",
				required: true,
			},
			stripeCustomerId: {
				type: "string",
				required: false,
			},
			stripeSubscriptionId: {
				type: "string",
				required: false,
			},
			status: {
				type: "string",
				defaultValue: "incomplete",
			},
			periodStart: {
				type: "date",
				required: false,
			},
			periodEnd: {
				type: "date",
				required: false,
			},
			trialStart: {
				type: "date",
				required: false,
			},
			trialEnd: {
				type: "date",
				required: false,
			},
			cancelAtPeriodEnd: {
				type: "boolean",
				required: false,
				defaultValue: false,
			},
			cancelAt: {
				type: "date",
				required: false,
			},
			canceledAt: {
				type: "date",
				required: false,
			},
			endedAt: {
				type: "date",
				required: false,
			},
			seats: {
				type: "number",
				required: false,
			},
			billingInterval: {
				type: "string",
				required: false,
			},
			stripeScheduleId: {
				type: "string",
				required: false,
			},
		},
	},
} satisfies BetterAuthPluginDBSchema;

export const user = {
	user: {
		fields: {
			stripeCustomerId: {
				type: "string",
				required: false,
			},
		},
	},
} satisfies BetterAuthPluginDBSchema;

export const organization = {
	organization: {
		fields: {
			stripeCustomerId: {
				type: "string",
				required: false,
			},
		},
	},
} satisfies BetterAuthPluginDBSchema;

type GetSchemaResult<O extends StripeOptions> = typeof user &
	(O["subscription"] extends { enabled: true } ? typeof subscriptions : {}) &
	(O["organization"] extends { enabled: true } ? typeof organization : {});

export const getSchema = <O extends StripeOptions>(
	options: O,
): GetSchemaResult<O> => {
	let baseSchema: BetterAuthPluginDBSchema = {};

	if (options.subscription?.enabled) {
		baseSchema = {
			...subscriptions,
			...user,
		};
	} else {
		baseSchema = {
			...user,
		};
	}

	if (options.organization?.enabled) {
		baseSchema = {
			...baseSchema,
			...organization,
		};
	}

	if (
		options.schema &&
		!options.subscription?.enabled &&
		"subscription" in options.schema
	) {
		const { subscription: _subscription, ...restSchema } = options.schema;
		return mergeSchema(baseSchema, restSchema) as GetSchemaResult<O>;
	}

	return mergeSchema(baseSchema, options.schema) as GetSchemaResult<O>;
};



================================================
FILE: packages/stripe/src/types.ts
================================================
import type {
	GenericEndpointContext,
	InferOptionSchema,
	Session,
	User,
} from "better-auth";
import type { Organization } from "better-auth/plugins/organization";
import type Stripe from "stripe";
import type { organization, subscriptions, user } from "./schema";

export type AuthorizeReferenceAction =
	| "upgrade-subscription"
	| "list-subscription"
	| "cancel-subscription"
	| "restore-subscription"
	| "billing-portal";

export type CustomerType = "user" | "organization";

export type WithStripeCustomerId = {
	stripeCustomerId?: string;
};

// TODO: Types extended by a plugin should be moved into that plugin.
export type WithActiveOrganizationId = {
	activeOrganizationId?: string;
};

export type StripeCtxSession = {
	session: Session & WithActiveOrganizationId;
	user: User & WithStripeCustomerId;
};

export type CheckoutSessionLocale = NonNullable<
	Stripe.Checkout.SessionCreateParams["locale"]
>;

export type CheckoutSessionLineItem = NonNullable<
	Stripe.Checkout.SessionCreateParams["line_items"]
>[number];

export type StripePlan = {
	/**
	 * Monthly price id
	 */
	priceId?: string | undefined;
	/**
	 * To use lookup key instead of price id
	 *
	 * https://docs.stripe.com/products-prices/
	 * manage-prices#lookup-keys
	 */
	lookupKey?: string | undefined;
	/**
	 * A yearly discount price id
	 *
	 * useful when you want to offer a discount for
	 * yearly subscription
	 */
	annualDiscountPriceId?: string | undefined;
	/**
	 * To use lookup key instead of price id
	 *
	 * https://docs.stripe.com/products-prices/
	 * manage-prices#lookup-keys
	 */
	annualDiscountLookupKey?: string | undefined;
	/**
	 * Plan name
	 */
	name: string;
	/**
	 * Limits for the plan
	 *
	 * useful when you want to define plan-specific metadata.
	 */
	limits?: Record<string, unknown> | undefined;
	/**
	 * Plan group name
	 *
	 * useful when you want to group plans or
	 * when a user can subscribe to multiple plans.
	 */
	group?: string | undefined;
	/**
	 * Per-seat billing price ID
	 *
	 * Requires the `organization` plugin. Member changes
	 * automatically sync the seat quantity in Stripe.
	 */
	seatPriceId?: string | undefined;
	/**
	 * Proration behavior when updating this plan's subscription.
	 *
	 * Controls how Stripe handles mid-cycle price changes.
	 * - `create_prorations`: Add proration line items to the next invoice (default)
	 * - `always_invoice`: Create prorations and immediately invoice
	 * - `none`: No proration; new price applies at next billing cycle
	 *
	 * @default "create_prorations"
	 * @see https://docs.stripe.com/billing/subscriptions/prorations
	 */
	prorationBehavior?:
		| Stripe.SubscriptionUpdateParams.ProrationBehavior
		| undefined;
	/**
	 * Additional line items to include in the checkout session.
	 *
	 * All line items must use the same billing interval as the base price (e.g. all monthly or all yearly).
	 * Stripe does not support mixed-interval subscriptions via Checkout Sessions.
	 *
	 * @see https://docs.stripe.com/billing/subscriptions/mixed-interval#limitations
	 */
	lineItems?: CheckoutSessionLineItem[] | undefined;
	/**
	 * Free trial days
	 */
	freeTrial?:
		| {
				/**
				 * Number of days
				 */
				days: number;
				/**
				 * A function that will be called when the trial
				 * starts.
				 *
				 * @param subscription
				 * @returns
				 */
				onTrialStart?: (subscription: Subscription) => Promise<void>;
				/**
				 * A function that will be called when the trial
				 * ends
				 *
				 * @param subscription - Subscription
				 * @returns
				 */
				onTrialEnd?: (
					data: {
						subscription: Subscription;
					},
					ctx: GenericEndpointContext,
				) => Promise<void>;
				/**
				 * A function that will be called when the trial
				 * expired.
				 * @param subscription - Subscription
				 * @returns
				 */
				onTrialExpired?: (
					subscription: Subscription,
					ctx: GenericEndpointContext,
				) => Promise<void>;
		  }
		| undefined;
};

export interface Subscription {
	/**
	 * Database identifier
	 */
	id: string;
	/**
	 * The plan name
	 */
	plan: string;
	/**
	 * Stripe customer id
	 */
	stripeCustomerId?: string | undefined;
	/**
	 * Stripe subscription id
	 */
	stripeSubscriptionId?: string | undefined;
	/**
	 * Trial start date
	 */
	trialStart?: Date | undefined;
	/**
	 * Trial end date
	 */
	trialEnd?: Date | undefined;
	/**
	 * Price Id for the subscription
	 */
	priceId?: string | undefined;
	/**
	 * To what reference id the subscription belongs to
	 * @example
	 * - userId for a user
	 * - workspace id for a saas platform
	 * - website id for a hosting platform
	 *
	 * @default - userId
	 */
	referenceId: string;
	/**
	 * Subscription status
	 */
	status:
		| "active"
		| "canceled"
		| "incomplete"
		| "incomplete_expired"
		| "past_due"
		| "paused"
		| "trialing"
		| "unpaid";
	/**
	 * The billing cycle start date
	 */
	periodStart?: Date | undefined;
	/**
	 * The billing cycle end date
	 */
	periodEnd?: Date | undefined;
	/**
	 * Whether this subscription will (if status=active)
	 * or did (if status=canceled) cancel at the end of the current billing period.
	 */
	cancelAtPeriodEnd?: boolean | undefined;
	/**
	 * If the subscription is scheduled to be canceled,
	 * this is the time at which the cancellation will take effect.
	 */
	cancelAt?: Date | undefined;
	/**
	 * If the subscription has been canceled, this is the time when it was canceled.
	 *
	 * Note: If the subscription was canceled with `cancel_at_period_end`,
	 * this reflects the cancellation request time, not when the subscription actually ends.
	 */
	canceledAt?: Date | undefined;
	/**
	 * If the subscription has ended, the date the subscription ended.
	 */
	endedAt?: Date | undefined;
	/**
	 * A field to group subscriptions so you can have multiple subscriptions
	 * for one reference id
	 */
	groupId?: string | undefined;
	/**
	 * Number of seats for the subscription (useful for team plans)
	 */
	seats?: number | undefined;
	/**
	 * The billing interval for this subscription.
	 * Indicates how often the subscription is billed.
	 * @see https://docs.stripe.com/api/plans/object#plan_object-interval
	 */
	billingInterval?: "day" | "week" | "month" | "year" | undefined;
	/**
	 * Stripe Subscription Schedule ID, present when a scheduled
	 * plan change is pending for this subscription.
	 */
	stripeScheduleId?: string | undefined;
}

export type SubscriptionOptions = {
	/**
	 * Subscription Configuration
	 */
	/**
	 * List of plan
	 */
	plans: StripePlan[] | (() => StripePlan[] | Promise<StripePlan[]>);
	/**
	 * Require email verification before a user is allowed to upgrade
	 * their subscriptions
	 *
	 * @default false
	 */
	requireEmailVerification?: boolean | undefined;
	/**
	 * A callback to run after a user has subscribed to a package
	 * @param event - Stripe Event
	 * @param subscription - Subscription Data
	 * @returns
	 */
	onSubscriptionComplete?:
		| ((
				data: {
					event: Stripe.Event;
					stripeSubscription: Stripe.Subscription;
					subscription: Subscription;
					plan: StripePlan;
				},
				ctx: GenericEndpointContext,
		  ) => Promise<void>)
		| undefined;
	/**
	 * A callback to run on every subscription update webhook. Use `stripeSubscription`
	 * to read fields that are not persisted in the local subscription row.
	 * @returns
	 */
	onSubscriptionUpdate?:
		| ((data: {
				event: Stripe.Event;
				stripeSubscription: Stripe.Subscription;
				subscription: Subscription;
		  }) => Promise<void>)
		| undefined;
	/**
	 * A callback to run once when a subscription transitions into a pending-cancel state
	 * (e.g. `cancel_at_period_end` or a scheduled `cancel_at`).
	 * @returns
	 */
	onSubscriptionCancel?:
		| ((data: {
				event?: Stripe.Event;
				stripeSubscription: Stripe.Subscription;
				subscription: Subscription;
				cancellationDetails?: Stripe.Subscription.CancellationDetails | null;
		  }) => Promise<void>)
		| undefined;
	/**
	 * A function to check if the reference id is valid
	 * and belongs to the user
	 *
	 * @param data - data containing user, session and referenceId
	 * @param ctx - the context object
	 * @returns
	 */
	authorizeReference?:
		| ((
				data: {
					user: User & Record<string, any>;
					session: Session & Record<string, any>;
					referenceId: string;
					action: AuthorizeReferenceAction;
				},
				ctx: GenericEndpointContext,
		  ) => Promise<boolean>)
		| undefined;
	/**
	 * A callback to run after a user has deleted their subscription
	 * @returns
	 */
	onSubscriptionDeleted?:
		| ((data: {
				event: Stripe.Event;
				stripeSubscription: Stripe.Subscription;
				subscription: Subscription;
		  }) => Promise<void>)
		| undefined;
	/**
	 * A callback to run when a subscription is created
	 * @returns
	 */
	onSubscriptionCreated?:
		| ((data: {
				event: Stripe.Event;
				stripeSubscription: Stripe.Subscription;
				subscription: Subscription;
				plan: StripePlan;
		  }) => Promise<void>)
		| undefined;
	/**
	 * parameters for session create params
	 *
	 * @param data - data containing user, session and plan
	 * @param req - the request object
	 * @param ctx - the context object
	 */
	getCheckoutSessionParams?:
		| ((
				data: {
					user: User & Record<string, any>;
					session: Session & Record<string, any>;
					plan: StripePlan;
					subscription: Subscription;
				},
				req: GenericEndpointContext["request"],
				ctx: GenericEndpointContext,
		  ) =>
				| Promise<{
						params?: Stripe.Checkout.SessionCreateParams;
						options?: Stripe.RequestOptions;
				  }>
				| {
						params?: Stripe.Checkout.SessionCreateParams;
						options?: Stripe.RequestOptions;
				  })
		| undefined;
};

export interface StripeOptions {
	/**
	 * Stripe Client
	 */
	stripeClient: Stripe;
	/**
	 * Stripe Webhook Secret
	 *
	 * @description Stripe webhook secret key
	 */
	stripeWebhookSecret: string;
	/**
	 * Enable customer creation when a user signs up
	 */
	createCustomerOnSignUp?: boolean | undefined;
	/**
	 * A callback to run after a customer has been created
	 * @param customer - Customer Data
	 * @param stripeCustomer - Stripe Customer Data
	 * @returns
	 */
	onCustomerCreate?:
		| ((
				data: {
					stripeCustomer: Stripe.Customer;
					user: User & WithStripeCustomerId;
				},
				ctx: GenericEndpointContext,
		  ) => Promise<void>)
		| undefined;
	/**
	 * A custom function to get the customer create
	 * params
	 * @param data - data containing user and session
	 * @returns
	 */
	getCustomerCreateParams?:
		| ((
				user: User,
				ctx: GenericEndpointContext,
		  ) => Promise<Partial<Stripe.CustomerCreateParams>>)
		| undefined;
	/**
	 * Subscriptions
	 */
	subscription?:
		| (
				| {
						enabled: false;
				  }
				| ({
						enabled: true;
				  } & SubscriptionOptions)
		  )
		| undefined;
	/**
	 * Organization Stripe integration
	 *
	 * Enable organizations to have their own Stripe customer ID
	 */
	organization?:
		| {
				/**
				 * Enable organization Stripe customer
				 */
				enabled: true;
				/**
				 * A custom function to get the customer create params
				 * for organization customers.
				 *
				 * @param organization - the organization
				 * @param ctx - the context object
				 * @returns
				 */
				getCustomerCreateParams?:
					| ((
							organization: Organization,
							ctx: GenericEndpointContext,
					  ) => Promise<Partial<Stripe.CustomerCreateParams>>)
					| undefined;
				/**
				 * A callback to run after an organization customer has been created
				 *
				 * @param data - data containing stripeCustomer and organization
				 * @param ctx - the context object
				 * @returns
				 */
				onCustomerCreate?:
					| ((
							data: {
								stripeCustomer: Stripe.Customer;
								organization: Organization & WithStripeCustomerId;
							},
							ctx: GenericEndpointContext,
					  ) => Promise<void>)
					| undefined;
		  }
		| undefined;
	/**
	 * A callback to run after a stripe event is received
	 * @param event - Stripe Event
	 * @returns
	 */
	onEvent?: ((event: Stripe.Event) => Promise<void>) | undefined;
	/**
	 * Schema for the stripe plugin
	 */
	schema?:
		| InferOptionSchema<
				typeof subscriptions & typeof user & typeof organization
		  >
		| undefined;
}



================================================
FILE: packages/stripe/src/utils.ts
================================================
import type Stripe from "stripe";
import type { StripeOptions, StripePlan, Subscription } from "./types";

export async function getPlans(
	subscriptionOptions: StripeOptions["subscription"],
) {
	if (subscriptionOptions?.enabled) {
		return typeof subscriptionOptions.plans === "function"
			? await subscriptionOptions.plans()
			: subscriptionOptions.plans;
	}
	throw new Error("Subscriptions are not enabled in the Stripe options.");
}

export async function getPlanByName(options: StripeOptions, name: string) {
	return await getPlans(options.subscription).then((res) =>
		res?.find((plan) => plan.name.toLowerCase() === name.toLowerCase()),
	);
}

/**
 * Checks if a subscription is in an available state (active or trialing)
 */
export function isActiveOrTrialing(
	sub: Subscription | Stripe.Subscription,
): boolean {
	return sub.status === "active" || sub.status === "trialing";
}

/**
 * Check if a subscription is scheduled to be canceled (DB subscription object)
 */
export function isPendingCancel(sub: Subscription): boolean {
	return !!(sub.cancelAtPeriodEnd || sub.cancelAt);
}

/**
 * Check if a Stripe subscription is scheduled to be canceled (Stripe API response)
 */
export function isStripePendingCancel(stripeSub: Stripe.Subscription): boolean {
	return !!(stripeSub.cancel_at_period_end || stripeSub.cancel_at);
}

/**
 * Escapes a value for use in Stripe search queries.
 * Stripe search query uses double quotes for string values,
 * and double quotes within the value need to be escaped with backslash.
 *
 * @see https://docs.stripe.com/search#search-query-language
 */
export function escapeStripeSearchValue(value: string): string {
	return value.replace(/"/g, '\\"');
}

/**
 * Resolve the quantity for a subscription by checking the seat item first,
 * then falling back to the plan item's quantity.
 */
export function resolveQuantity(
	items: Stripe.SubscriptionItem[],
	planItem: Stripe.SubscriptionItem,
	seatPriceId?: string,
): number {
	if (seatPriceId) {
		const seatItem = items.find((item) => item.price.id === seatPriceId);
		if (seatItem) return seatItem.quantity ?? 1;
	}
	return planItem.quantity ?? 1;
}

/**
 * Resolve the plan-matching subscription item and its plan config
 * from a (possibly multi-item) Stripe subscription.
 *
 * - Iterates items to find one whose price matches a configured plan.
 * - For single-item subscriptions, returns the item even without a plan match.
 */
export async function resolvePlanItem(
	options: StripeOptions,
	items: Stripe.SubscriptionItem[],
): Promise<
	{ item: Stripe.SubscriptionItem; plan: StripePlan | undefined } | undefined
> {
	const first = items[0];
	if (!first) return undefined;
	const plans = await getPlans(options.subscription);
	for (const item of items) {
		const plan = plans?.find(
			(p) =>
				p.priceId === item.price.id ||
				p.annualDiscountPriceId === item.price.id ||
				(item.price.lookup_key &&
					(p.lookupKey === item.price.lookup_key ||
						p.annualDiscountLookupKey === item.price.lookup_key)),
		);
		if (plan) return { item, plan };
	}
	return items.length === 1 ? { item: first, plan: undefined } : undefined;
}



================================================
FILE: packages/stripe/src/version.ts
================================================
import pkg from "../package.json" with { type: "json" };

export const PACKAGE_VERSION = pkg.version;



================================================
FILE: packages/stripe/test/metadata.test.ts
================================================
import { afterEach, describe, expect, it } from "vitest";
import { customerMetadata, subscriptionMetadata } from "../src/metadata";

const ROOT_PROBE_KEY = "polluted";

/**
 * @see https://github.com/advisories/GHSA-737v-mqg7-c878
 */
describe("stripe metadata prototype pollution guard", () => {
	afterEach(() => {
		Reflect.deleteProperty(Object.prototype, ROOT_PROBE_KEY);
	});

	it("drops __proto__ from user metadata on customerMetadata.set", () => {
		const malicious = JSON.parse(
			`{"__proto__":{"${ROOT_PROBE_KEY}":"yes"},"plan":"pro"}`,
		);
		const result = customerMetadata.set(
			{ customerType: "user", userId: "u1" },
			malicious,
		);
		expect(Object.getPrototypeOf(result)).toBe(Object.prototype);
		expect(({} as { polluted?: unknown }).polluted).toBeUndefined();
		expect(result.plan).toBe("pro");
		expect(result.userId).toBe("u1");
	});

	it("drops constructor and prototype from user metadata on customerMetadata.set", () => {
		const malicious = JSON.parse(
			`{"constructor":{"prototype":{"${ROOT_PROBE_KEY}":"yes"}},"plan":"pro"}`,
		);
		const result = customerMetadata.set(
			{ customerType: "user", userId: "u1" },
			malicious,
		);
		expect(result.constructor).toBe(Object);
		expect(({} as { polluted?: unknown }).polluted).toBeUndefined();
		expect(result.plan).toBe("pro");
	});

	it("drops __proto__ from user metadata on subscriptionMetadata.set", () => {
		const malicious = JSON.parse(
			`{"__proto__":{"${ROOT_PROBE_KEY}":"yes"},"planName":"pro"}`,
		);
		const result = subscriptionMetadata.set(
			{ userId: "u1", subscriptionId: "s1", referenceId: "ref1" },
			malicious,
		);
		expect(Object.getPrototypeOf(result)).toBe(Object.prototype);
		expect(({} as { polluted?: unknown }).polluted).toBeUndefined();
		expect(result.planName).toBe("pro");
		expect(result.subscriptionId).toBe("s1");
	});

	it("internal fields always take precedence over user metadata", () => {
		const result = customerMetadata.set(
			{ customerType: "user", userId: "real" },
			{ userId: "spoofed", customerType: "organization" },
		);
		expect(result.userId).toBe("real");
		expect(result.customerType).toBe("user");
	});
});



================================================
FILE: packages/stripe/test/seat-based-billing.test.ts
================================================
import { organizationClient } from "better-auth/client/plugins";
import { organization } from "better-auth/plugins/organization";
import { getTestInstance } from "better-auth/test";
import type Stripe from "stripe";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { stripe } from "../src";
import { stripeClient } from "../src/client";
import type { StripeOptions, Subscription } from "../src/types";

describe("seat-based billing", () => {
	const mockStripe = {
		prices: {
			list: vi.fn().mockResolvedValue({ data: [] }),
			retrieve: vi.fn().mockImplementation((priceId: string) =>
				Promise.resolve({
					id: priceId,
					recurring: { usage_type: "licensed", interval: "month" },
				}),
			),
		},
		customers: {
			create: vi.fn().mockResolvedValue({ id: "cus_seat_org" }),
			list: vi.fn().mockResolvedValue({ data: [] }),
			search: vi.fn().mockResolvedValue({ data: [] }),
			retrieve: vi.fn().mockResolvedValue({
				id: "cus_seat_org",
				name: "Seat Org",
				deleted: false,
			}),
			update: vi.fn(),
		},
		checkout: {
			sessions: {
				create: vi.fn().mockResolvedValue({
					url: "https://checkout.stripe.com/mock",
					id: "cs_seat_mock",
				}),
			},
		},
		billingPortal: {
			sessions: {
				create: vi
					.fn()
					.mockResolvedValue({ url: "https://billing.stripe.com/mock" }),
			},
		},
		subscriptions: {
			retrieve: vi.fn(),
			list: vi.fn().mockResolvedValue({ data: [] }),
			update: vi.fn().mockResolvedValue({}),
		},
		subscriptionSchedules: {
			list: vi.fn().mockResolvedValue({ data: [] }),
			create: vi.fn().mockResolvedValue({ id: "sub_sched_mock", phases: [] }),
			update: vi.fn(),
			release: vi.fn(),
		},
		webhooks: {
			constructEventAsync: vi.fn(),
		},
	};

	const seatPlanOptions: StripeOptions = {
		stripeClient: mockStripe as unknown as Stripe,
		stripeWebhookSecret: "test_secret",
		createCustomerOnSignUp: false,
		organization: { enabled: true },
		subscription: {
			enabled: true,
			plans: [
				{
					priceId: "price_team_base",
					name: "team",
					seatPriceId: "price_team_seat",
				},
				{
					priceId: "price_enterprise_base",
					name: "enterprise",
					seatPriceId: "price_enterprise_seat",
				},
			],
			authorizeReference: async () => true,
		},
	};

	beforeEach(() => {
		vi.clearAllMocks();
		mockStripe.subscriptions.list.mockResolvedValue({ data: [] });
		mockStripe.customers.search.mockResolvedValue({ data: [] });
	});

	describe("checkout with auto-managed seats", async () => {
		const { client, auth, sessionSetter } = await getTestInstance(
			{
				plugins: [organization(), stripe(seatPlanOptions)],
			},
			{
				disableTestUser: true,
				clientOptions: {
					plugins: [organizationClient(), stripeClient({ subscription: true })],
				},
			},
		);
		const ctx = await auth.$context;

		await client.signUp.email(
			{
				email: "seat-test@email.com",
				password: "password",
				name: "Seat Test User",
			},
			{ throw: true },
		);
		const headers = new Headers();
		await client.signIn.email(
			{ email: "seat-test@email.com", password: "password" },
			{ throw: true, onSuccess: sessionSetter(headers) },
		);

		it("should create checkout with both base plan and seat line items", async () => {
			const org = await client.organization.create({
				name: "Seat Test Org",
				slug: "seat-test-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			const res = await client.subscription.upgrade({
				plan: "team",
				customerType: "organization",
				referenceId: orgId,
				fetchOptions: { headers },
			});

			expect(res.data?.url).toBeDefined();

			const createCall = mockStripe.checkout.sessions.create.mock.calls[0]?.[0];
			expect(createCall).toBeDefined();
			expect(createCall.line_items[0]).toEqual({
				price: "price_team_base",
				quantity: 1,
			});
			expect(createCall.line_items[1]).toMatchObject({
				price: "price_team_seat",
				quantity: expect.any(Number),
			});
		});

		it("should use actual member count as seat quantity", async () => {
			const org = await client.organization.create({
				name: "Seat Count Org",
				slug: "seat-count-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			// Owner is already a member (count=1). Add 2 more via adapter.
			for (const email of ["member2@seat.com", "member3@seat.com"]) {
				const member = await ctx.adapter.create({
					model: "user",
					data: { email, name: email.split("@")[0] },
				});
				await ctx.adapter.create({
					model: "member",
					data: {
						userId: member.id,
						organizationId: orgId,
						role: "member",
						createdAt: new Date(),
					},
				});
			}

			await client.subscription.upgrade({
				plan: "team",
				customerType: "organization",
				referenceId: orgId,
				fetchOptions: { headers },
			});

			const createCall = mockStripe.checkout.sessions.create.mock.calls[0]?.[0];
			// 1 owner + 2 members = 3
			expect(createCall.line_items[1]).toMatchObject({
				price: "price_team_seat",
				quantity: 3,
			});
		});
	});

	describe("checkout with additional line items", async () => {
		const meterPlanOptions: StripeOptions = {
			stripeClient: mockStripe as unknown as Stripe,
			stripeWebhookSecret: "test_secret",
			createCustomerOnSignUp: false,
			organization: { enabled: true },
			subscription: {
				enabled: true,
				plans: [
					{
						priceId: "price_pro_base",
						name: "pro",
						seatPriceId: "price_pro_seat",
						lineItems: [
							{ price: "price_meter_api" },
							{ price: "price_meter_email" },
						],
					},
				],
				authorizeReference: async () => true,
			},
		};

		const { client, sessionSetter } = await getTestInstance(
			{
				plugins: [organization(), stripe(meterPlanOptions)],
			},
			{
				disableTestUser: true,
				clientOptions: {
					plugins: [organizationClient(), stripeClient({ subscription: true })],
				},
			},
		);

		await client.signUp.email(
			{
				email: "meter-test@email.com",
				password: "password",
				name: "Meter Test User",
			},
			{ throw: true },
		);
		const headers = new Headers();
		await client.signIn.email(
			{ email: "meter-test@email.com", password: "password" },
			{ throw: true, onSuccess: sessionSetter(headers) },
		);

		it("should include additional line items in checkout", async () => {
			const org = await client.organization.create({
				name: "Meter Test Org",
				slug: "meter-test-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await client.subscription.upgrade({
				plan: "pro",
				customerType: "organization",
				referenceId: orgId,
				fetchOptions: { headers },
			});

			const createCall = mockStripe.checkout.sessions.create.mock.calls[0]?.[0];
			expect(createCall).toBeDefined();
			expect(createCall.line_items).toHaveLength(4); // base + seat + 2 lineItems
			expect(createCall.line_items[0]).toEqual({
				price: "price_pro_base",
				quantity: 1,
			});
			expect(createCall.line_items[1]).toMatchObject({
				price: "price_pro_seat",
				quantity: expect.any(Number),
			});
			expect(createCall.line_items[2]).toEqual({ price: "price_meter_api" });
			expect(createCall.line_items[3]).toEqual({ price: "price_meter_email" });
		});

		it("should not include extra line items when plan has none", async () => {
			mockStripe.checkout.sessions.create.mockClear();

			const noMeterOptions: StripeOptions = {
				stripeClient: mockStripe as unknown as Stripe,
				stripeWebhookSecret: "test_secret",
				createCustomerOnSignUp: false,
				organization: { enabled: true },
				subscription: {
					enabled: true,
					plans: [
						{
							priceId: "price_basic_base",
							name: "basic",
							seatPriceId: "price_basic_seat",
						},
					],
					authorizeReference: async () => true,
				},
			};

			const { client: c2, sessionSetter: ss2 } = await getTestInstance(
				{
					plugins: [organization(), stripe(noMeterOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);

			await c2.signUp.email(
				{
					email: "no-meter@email.com",
					password: "password",
					name: "No Meter User",
				},
				{ throw: true },
			);
			const h2 = new Headers();
			await c2.signIn.email(
				{ email: "no-meter@email.com", password: "password" },
				{ throw: true, onSuccess: ss2(h2) },
			);

			const org2 = await c2.organization.create({
				name: "No Meter Org",
				slug: "no-meter-org",
				fetchOptions: { headers: h2 },
			});

			await c2.subscription.upgrade({
				plan: "basic",
				customerType: "organization",
				referenceId: org2.data?.id as string,
				fetchOptions: { headers: h2 },
			});

			const call = mockStripe.checkout.sessions.create.mock.calls[0]?.[0];
			expect(call.line_items).toHaveLength(2); // base + seat only
		});
	});

	describe("checkout when priceId equals seatPriceId", async () => {
		const seatOnlyOptions: StripeOptions = {
			stripeClient: mockStripe as unknown as Stripe,
			stripeWebhookSecret: "test_secret",
			createCustomerOnSignUp: false,
			organization: { enabled: true },
			subscription: {
				enabled: true,
				plans: [
					{
						priceId: "price_same",
						name: "starter",
						seatPriceId: "price_same",
						lineItems: [{ price: "price_meter_api" }],
					},
				],
				authorizeReference: async () => true,
			},
		};

		const { client, sessionSetter } = await getTestInstance(
			{
				plugins: [organization(), stripe(seatOnlyOptions)],
			},
			{
				disableTestUser: true,
				clientOptions: {
					plugins: [organizationClient(), stripeClient({ subscription: true })],
				},
			},
		);

		await client.signUp.email(
			{
				email: "seat-only@email.com",
				password: "password",
				name: "Seat Only",
			},
			{ throw: true },
		);
		const headers = new Headers();
		await client.signIn.email(
			{ email: "seat-only@email.com", password: "password" },
			{ throw: true, onSuccess: sessionSetter(headers) },
		);

		it("should not duplicate base price in line_items", async () => {
			mockStripe.checkout.sessions.create.mockClear();

			const org = await client.organization.create({
				name: "Seat Only Org",
				slug: "seat-only-org",
				fetchOptions: { headers },
			});

			await client.subscription.upgrade({
				plan: "starter",
				customerType: "organization",
				referenceId: org.data?.id as string,
				fetchOptions: { headers },
			});

			const call = mockStripe.checkout.sessions.create.mock.calls[0]?.[0];
			expect(call).toBeDefined();
			// seat + 1 meter = 2 items (no duplicate base)
			expect(call.line_items).toHaveLength(2);
			expect(call.line_items[0]).toMatchObject({
				price: "price_same",
				quantity: expect.any(Number),
			});
			expect(call.line_items[1]).toEqual({ price: "price_meter_api" });
		});
	});

	describe("portal upgrade with seat items", () => {
		it("should swap seat item when upgrading to a plan with different seat pricing", async () => {
			const { client, auth, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(seatPlanOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "portal-seat@test.com",
					password: "password",
					name: "Portal User",
				},
				{ throw: true },
			);
			const headers = new Headers();
			await client.signIn.email(
				{ email: "portal-seat@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(headers) },
			);

			const org = await client.organization.create({
				name: "Portal Seat Org",
				slug: "portal-seat-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_portal_seat" },
				where: [{ field: "id", value: orgId }],
			});
			await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: orgId,
					stripeCustomerId: "cus_portal_seat",
					stripeSubscriptionId: "sub_team",
					status: "active",
					plan: "team",
					seats: 2,
				},
			});

			mockStripe.subscriptions.list.mockResolvedValue({
				data: [
					{
						id: "sub_team",
						status: "active",
						cancel_at_period_end: false,
						cancel_at: null,
						items: {
							data: [
								{
									id: "si_base",
									price: { id: "price_team_base", lookup_key: null },
									quantity: 1,
								},
								{
									id: "si_seat",
									price: { id: "price_team_seat", lookup_key: null },
									quantity: 2,
								},
							],
						},
					},
				],
			});

			const res = await client.subscription.upgrade({
				plan: "enterprise",
				customerType: "organization",
				referenceId: orgId,
				fetchOptions: { headers },
			});

			expect(res.data?.url).toBeDefined();

			// Billing portal supports only 1 item — seat price change
			// falls back to direct subscriptions.update() API.
			expect(mockStripe.billingPortal.sessions.create).not.toHaveBeenCalled();

			const updateCall = mockStripe.subscriptions.update.mock.calls[0]!;
			expect(updateCall[0]).toBe("sub_team");
			const items = updateCall[1]!.items;

			expect(items).toContainEqual(
				expect.objectContaining({
					id: "si_base",
					price: "price_enterprise_base",
				}),
			);
			expect(items).toContainEqual(
				expect.objectContaining({
					id: "si_seat",
					price: "price_enterprise_seat",
					quantity: expect.any(Number),
				}),
			);
			expect(updateCall[1]!.proration_behavior).toBe("create_prorations");
		});

		it("should use custom prorationBehavior from plan config", async () => {
			const customProrationOptions: StripeOptions = {
				...seatPlanOptions,
				subscription: {
					enabled: true,
					plans: [
						{
							priceId: "price_team_base",
							name: "team",
							seatPriceId: "price_team_seat",
							prorationBehavior: "always_invoice",
						},
						{
							priceId: "price_enterprise_base",
							name: "enterprise",
							seatPriceId: "price_enterprise_seat",
							prorationBehavior: "always_invoice",
						},
					],
					authorizeReference: async () => true,
				},
			};

			const { client, auth, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(customProrationOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "proration-test@test.com",
					password: "password",
					name: "Proration User",
				},
				{ throw: true },
			);
			const headers = new Headers();
			await client.signIn.email(
				{ email: "proration-test@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(headers) },
			);

			const org = await client.organization.create({
				name: "Proration Org",
				slug: "proration-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_proration" },
				where: [{ field: "id", value: orgId }],
			});
			await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: orgId,
					stripeCustomerId: "cus_proration",
					stripeSubscriptionId: "sub_proration",
					status: "active",
					plan: "team",
					seats: 2,
				},
			});

			mockStripe.subscriptions.list.mockResolvedValue({
				data: [
					{
						id: "sub_proration",
						status: "active",
						cancel_at_period_end: false,
						cancel_at: null,
						items: {
							data: [
								{
									id: "si_base",
									price: { id: "price_team_base", lookup_key: null },
									quantity: 1,
								},
								{
									id: "si_seat",
									price: { id: "price_team_seat", lookup_key: null },
									quantity: 2,
								},
							],
						},
					},
				],
			});

			const res = await client.subscription.upgrade({
				plan: "enterprise",
				customerType: "organization",
				referenceId: orgId,
				fetchOptions: { headers },
			});

			expect(res.data?.url).toBeDefined();

			const updateCall = mockStripe.subscriptions.update.mock.calls[0]!;
			expect(updateCall[1]!.proration_behavior).toBe("always_invoice");
		});

		it("should skip seat item swap when seat pricing is unchanged", async () => {
			const sameSeatOptions: StripeOptions = {
				...seatPlanOptions,
				subscription: {
					enabled: true,
					plans: [
						{
							priceId: "price_basic_base",
							name: "basic",
							seatPriceId: "price_shared_seat",
						},
						{
							priceId: "price_pro_base",
							name: "pro",
							seatPriceId: "price_shared_seat",
						},
					],
					authorizeReference: async () => true,
				},
			};

			const { client, auth, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(sameSeatOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "same-seat@test.com",
					password: "password",
					name: "Same Seat",
				},
				{ throw: true },
			);
			const headers = new Headers();
			await client.signIn.email(
				{ email: "same-seat@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(headers) },
			);

			const org = await client.organization.create({
				name: "Same Seat Org",
				slug: "same-seat-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_same_seat" },
				where: [{ field: "id", value: orgId }],
			});
			await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: orgId,
					stripeCustomerId: "cus_same_seat",
					stripeSubscriptionId: "sub_basic",
					status: "active",
					plan: "basic",
					seats: 1,
				},
			});

			mockStripe.subscriptions.list.mockResolvedValue({
				data: [
					{
						id: "sub_basic",
						status: "active",
						cancel_at_period_end: false,
						cancel_at: null,
						items: {
							data: [
								{
									id: "si_base",
									price: { id: "price_basic_base", lookup_key: null },
									quantity: 1,
								},
								{
									id: "si_seat",
									price: { id: "price_shared_seat", lookup_key: null },
									quantity: 1,
								},
							],
						},
					},
				],
			});

			await client.subscription.upgrade({
				plan: "pro",
				customerType: "organization",
				referenceId: orgId,
				fetchOptions: { headers },
			});

			const portalCall =
				mockStripe.billingPortal.sessions.create.mock.calls[0]?.[0];
			const items = portalCall.flow_data.subscription_update_confirm.items;

			expect(items).toHaveLength(1);
			expect(items[0]).toMatchObject({
				id: "si_base",
				price: "price_pro_base",
			});
		});

		it("should not duplicate subscription item when upgrading between seat-only plans", async () => {
			const seatOnlyUpgradeOptions: StripeOptions = {
				stripeClient: mockStripe as unknown as Stripe,
				stripeWebhookSecret: "test_secret",
				createCustomerOnSignUp: false,
				organization: { enabled: true },
				subscription: {
					enabled: true,
					plans: [
						{
							priceId: "price_starter",
							name: "starter",
							seatPriceId: "price_starter",
						},
						{
							priceId: "price_growth",
							name: "growth",
							seatPriceId: "price_growth",
						},
					],
					authorizeReference: async () => true,
				},
			};

			const { client, auth, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(seatOnlyUpgradeOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "seat-only-upgrade@test.com",
					password: "password",
					name: "Seat Only Upgrade",
				},
				{ throw: true },
			);
			const headers = new Headers();
			await client.signIn.email(
				{ email: "seat-only-upgrade@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(headers) },
			);

			const org = await client.organization.create({
				name: "Seat Only Upgrade Org",
				slug: "seat-only-upgrade-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_seat_only_upgrade" },
				where: [{ field: "id", value: orgId }],
			});
			await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: orgId,
					stripeCustomerId: "cus_seat_only_upgrade",
					stripeSubscriptionId: "sub_starter",
					status: "active",
					plan: "starter",
					seats: 2,
				},
			});

			// Seat-only plan: single item where base price IS the seat price
			mockStripe.subscriptions.list.mockResolvedValue({
				data: [
					{
						id: "sub_starter",
						status: "active",
						cancel_at_period_end: false,
						cancel_at: null,
						items: {
							data: [
								{
									id: "si_only",
									price: { id: "price_starter", lookup_key: null },
									quantity: 2,
								},
							],
						},
					},
				],
			});

			await client.subscription.upgrade({
				plan: "growth",
				customerType: "organization",
				referenceId: orgId,
				fetchOptions: { headers },
			});

			const updateCall = mockStripe.subscriptions.update.mock.calls[0]!;
			expect(updateCall[0]).toBe("sub_starter");
			const items = updateCall[1]!.items;

			// Should have exactly 1 item — no duplicate si_only entries
			expect(items).toHaveLength(1);
			expect(items[0]).toMatchObject({
				id: "si_only",
				price: "price_growth",
				quantity: expect.any(Number),
			});
		});
	});

	describe("seat sync on member changes", () => {
		it("should sync seat quantity when a member accepts an invitation", async () => {
			mockStripe.subscriptions.retrieve.mockResolvedValue({
				id: "sub_seat_sync",
				status: "active",
				items: {
					data: [
						{
							id: "si_base",
							price: { id: "price_team_base" },
							quantity: 1,
						},
						{
							id: "si_seat",
							price: { id: "price_team_seat" },
							quantity: 1,
						},
					],
				},
			});

			const { client, auth, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(seatPlanOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "sync-owner@test.com",
					password: "password",
					name: "Sync Owner",
				},
				{ throw: true },
			);
			const headers = new Headers();
			await client.signIn.email(
				{ email: "sync-owner@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(headers) },
			);

			const org = await client.organization.create({
				name: "Sync Seat Org",
				slug: "sync-seat-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_sync_seat" },
				where: [{ field: "id", value: orgId }],
			});
			await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: orgId,
					stripeCustomerId: "cus_sync_seat",
					stripeSubscriptionId: "sub_seat_sync",
					status: "active",
					plan: "team",
					seats: 1,
				},
			});

			const newMember = await ctx.adapter.create({
				model: "user",
				data: { email: "new-member@test.com", name: "New Member" },
			});
			await ctx.adapter.create({
				model: "account",
				data: {
					userId: newMember.id,
					accountId: newMember.id,
					providerId: "credential",
					password: await ctx.password.hash("password"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			});

			await client.organization.inviteMember({
				email: "new-member@test.com",
				role: "member",
				organizationId: orgId,
				fetchOptions: { headers },
			});

			const newMemberHeaders = new Headers();
			await client.signIn.email(
				{ email: "new-member@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(newMemberHeaders) },
			);

			const invitations = await client.organization.listInvitations({
				fetchOptions: { headers },
			});
			const invitationId = invitations.data?.[0]?.id;
			expect(invitationId).toBeDefined();

			await client.organization.acceptInvitation({
				invitationId: invitationId!,
				fetchOptions: { headers: newMemberHeaders },
			});

			expect(mockStripe.subscriptions.update).toHaveBeenCalledWith(
				"sub_seat_sync",
				expect.objectContaining({
					proration_behavior: "create_prorations",
				}),
			);

			const updateCall = mockStripe.subscriptions.update.mock.calls[0];
			const seatItems = updateCall?.[1]?.items;
			expect(seatItems).toContainEqual(
				expect.objectContaining({ id: "si_seat", quantity: 2 }),
			);
		});
	});

	describe("seat sync on member removal", () => {
		it("should sync seat quantity when a member is removed", async () => {
			mockStripe.subscriptions.retrieve.mockResolvedValue({
				id: "sub_seat_remove",
				status: "active",
				items: {
					data: [
						{
							id: "si_base",
							price: { id: "price_team_base" },
							quantity: 1,
						},
						{
							id: "si_seat",
							price: { id: "price_team_seat" },
							quantity: 2,
						},
					],
				},
			});

			const { client, auth, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(seatPlanOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "remove-owner@test.com",
					password: "password",
					name: "Remove Owner",
				},
				{ throw: true },
			);
			const headers = new Headers();
			await client.signIn.email(
				{ email: "remove-owner@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(headers) },
			);

			const org = await client.organization.create({
				name: "Remove Seat Org",
				slug: "remove-seat-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_remove_seat" },
				where: [{ field: "id", value: orgId }],
			});
			await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: orgId,
					stripeCustomerId: "cus_remove_seat",
					stripeSubscriptionId: "sub_seat_remove",
					status: "active",
					plan: "team",
					seats: 2,
				},
			});

			// Add a member directly via adapter
			const memberUser = await ctx.adapter.create({
				model: "user",
				data: { email: "removable@test.com", name: "Removable" },
			});
			const member = await ctx.adapter.create({
				model: "member",
				data: {
					userId: memberUser.id,
					organizationId: orgId,
					role: "member",
					createdAt: new Date(),
				},
			});

			// Remove the member
			await client.organization.removeMember({
				memberIdOrEmail: member.id,
				organizationId: orgId,
				fetchOptions: { headers },
			});

			expect(mockStripe.subscriptions.update).toHaveBeenCalledWith(
				"sub_seat_remove",
				expect.objectContaining({
					proration_behavior: "create_prorations",
				}),
			);

			const updateCall = mockStripe.subscriptions.update.mock.calls[0];
			const seatItems = updateCall?.[1]?.items;
			// Owner only remains → quantity = 1
			expect(seatItems).toContainEqual(
				expect.objectContaining({ id: "si_seat", quantity: 1 }),
			);
		});

		it("should use custom prorationBehavior on member removal", async () => {
			mockStripe.subscriptions.retrieve.mockResolvedValue({
				id: "sub_seat_remove_proration",
				status: "active",
				items: {
					data: [
						{
							id: "si_base",
							price: { id: "price_team_base" },
							quantity: 1,
						},
						{
							id: "si_seat",
							price: { id: "price_team_seat" },
							quantity: 2,
						},
					],
				},
			});

			const customProrationOptions: StripeOptions = {
				...seatPlanOptions,
				subscription: {
					enabled: true,
					plans: [
						{
							priceId: "price_team_base",
							name: "team",
							seatPriceId: "price_team_seat",
							prorationBehavior: "none",
						},
						{
							priceId: "price_enterprise_base",
							name: "enterprise",
							seatPriceId: "price_enterprise_seat",
							prorationBehavior: "none",
						},
					],
					authorizeReference: async () => true,
				},
			};

			const { client, auth, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(customProrationOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "proration-remove@test.com",
					password: "password",
					name: "Proration Remove User",
				},
				{ throw: true },
			);
			const headers = new Headers();
			await client.signIn.email(
				{ email: "proration-remove@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(headers) },
			);

			const org = await client.organization.create({
				name: "Proration Remove Org",
				slug: "proration-remove-org",
				fetchOptions: { headers },
			});
			const orgId = org.data?.id as string;

			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_proration_remove" },
				where: [{ field: "id", value: orgId }],
			});
			await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: orgId,
					stripeCustomerId: "cus_proration_remove",
					stripeSubscriptionId: "sub_seat_remove_proration",
					status: "active",
					plan: "team",
					seats: 2,
				},
			});

			const memberUser = await ctx.adapter.create({
				model: "user",
				data: { email: "proration-removable@test.com", name: "Removable" },
			});
			const member = await ctx.adapter.create({
				model: "member",
				data: {
					userId: memberUser.id,
					organizationId: orgId,
					role: "member",
					createdAt: new Date(),
				},
			});

			await client.organization.removeMember({
				memberIdOrEmail: member.id,
				organizationId: orgId,
				fetchOptions: { headers },
			});

			expect(mockStripe.subscriptions.update).toHaveBeenCalledWith(
				"sub_seat_remove_proration",
				expect.objectContaining({
					proration_behavior: "none",
				}),
			);
		});
	});

	describe("webhook seat handling", () => {
		it("should persist seat count on subscription creation", async () => {
			const now = Math.floor(Date.now() / 1000);
			const mockEvent = {
				type: "customer.subscription.created",
				data: {
					object: {
						id: "sub_webhook_seat",
						customer: "cus_webhook_seat",
						status: "active",
						items: {
							data: [
								{
									price: { id: "price_team_base", lookup_key: null },
									quantity: 1,
									current_period_start: now,
									current_period_end: now + 30 * 24 * 60 * 60,
								},
								{
									price: { id: "price_team_seat", lookup_key: null },
									quantity: 5,
									current_period_start: now,
									current_period_end: now + 30 * 24 * 60 * 60,
								},
							],
						},
						cancel_at_period_end: false,
					},
				},
			};

			const webhookOptions: StripeOptions = {
				...seatPlanOptions,
				stripeClient: {
					...mockStripe,
					webhooks: {
						constructEventAsync: vi.fn().mockResolvedValue(mockEvent),
					},
				} as unknown as Stripe,
			};

			const { auth, client, sessionSetter } = await getTestInstance(
				{
					plugins: [organization(), stripe(webhookOptions)],
				},
				{
					disableTestUser: true,
					clientOptions: {
						plugins: [
							organizationClient(),
							stripeClient({ subscription: true }),
						],
					},
				},
			);
			const ctx = await auth.$context;

			await client.signUp.email(
				{
					email: "webhook-seat@test.com",
					password: "password",
					name: "Webhook Seat User",
				},
				{ throw: true },
			);
			const wHeaders = new Headers();
			await client.signIn.email(
				{ email: "webhook-seat@test.com", password: "password" },
				{ throw: true, onSuccess: sessionSetter(wHeaders) },
			);

			const org = await client.organization.create({
				name: "Webhook Seat Org",
				slug: "webhook-seat-org",
				fetchOptions: { headers: wHeaders },
			});
			const orgId = org.data?.id as string;
			await ctx.adapter.update({
				model: "organization",
				update: { stripeCustomerId: "cus_webhook_seat" },
				where: [{ field: "id", value: orgId }],
			});

			const response = await auth.handler(
				new Request("http://localhost:3000/api/auth/stripe/webhook", {
					method: "POST",
					headers: { "stripe-signature": "test_sig" },
					body: JSON.stringify(mockEvent),
				}),
			);

			expect(response.status).toBe(200);

			const sub = await ctx.adapter.findOne<Subscription>({
				model: "subscription",
				where: [{ field: "stripeSubscriptionId", value: "sub_webhook_seat" }],
			});

			expect(sub).toBeDefined();
			expect(sub?.plan).toBe("team");
			expect(sub?.seats).toBe(5);
		});

		it("should update seat count on subscription update", async () => {
			const now = Math.floor(Date.now() / 1000);
			const webhookMock = vi.fn();

			const webhookOptions: StripeOptions = {
				...seatPlanOptions,
				stripeClient: {
					...mockStripe,
					webhooks: { constructEventAsync: webhookMock },
				} as unknown as Stripe,
			};

			const { auth } = await getTestInstance(
				{
					plugins: [organization(), stripe(webhookOptions)],
				},
				{ disableTestUser: true },
			);
			const ctx = await auth.$context;

			const sub = await ctx.adapter.create({
				model: "subscription",
				data: {
					referenceId: "org_123",
					stripeCustomerId: "cus_seat_update",
					stripeSubscriptionId: "sub_seat_update",
					status: "active",
					plan: "team",
					seats: 3,
				},
			});

			const mockUpdateEvent = {
				type: "customer.subscription.updated",
				data: {
					object: {
						id: "sub_seat_update",
						customer: "cus_seat_update",
						status: "active",
						cancel_at_period_end: false,
						cancel_at: null,
						canceled_at: null,
						ended_at: null,
						items: {
							data: [
								{
									price: { id: "price_team_base", lookup_key: null },
									quantity: 1,
									current_period_start: now,
									current_period_end: now + 30 * 24 * 60 * 60,
								},
								{
									price: { id: "price_team_seat", lookup_key: null },
									quantity: 8,
									current_period_start: now,
									current_period_end: now + 30 * 24 * 60 * 60,
								},
							],
						},
						metadata: { subscriptionId: sub.id },
					},
				},
			};

			webhookMock.mockResolvedValue(mockUpdateEvent);

			const response = await auth.handler(
				new Request("http://localhost:3000/api/auth/stripe/webhook", {
					method: "POST",
					headers: { "stripe-signature": "test_sig" },
					body: JSON.stringify(mockUpdateEvent),
				}),
			);

			expect(response.status).toBe(200);

			const updated = await ctx.adapter.findOne<Subscription>({
				model: "subscription",
				where: [{ field: "id", value: sub.id }],
			});

			expect(updated?.seats).toBe(8);
		});
	});
});



================================================
FILE: packages/stripe/test/utils.test.ts
================================================
import type Stripe from "stripe";
import { describe, expect, it } from "vitest";
import type { StripeOptions } from "../src/types";
import { escapeStripeSearchValue, resolvePlanItem } from "../src/utils";

describe("escapeStripeSearchValue", () => {
	it("should escape double quotes", () => {
		expect(escapeStripeSearchValue('test"value')).toBe('test\\"value');
	});

	it("should handle strings without quotes", () => {
		expect(escapeStripeSearchValue("simple")).toBe("simple");
	});

	it("should escape multiple quotes", () => {
		expect(escapeStripeSearchValue('"a" and "b"')).toBe('\\"a\\" and \\"b\\"');
	});
});

describe("resolvePlanItem", () => {
	const options = {
		subscription: {
			enabled: true,
			plans: [
				{ name: "starter", priceId: "price_starter" },
				{ name: "premium", priceId: "price_premium" },
			],
		},
	} as StripeOptions;

	it("should return item and plan for single-item subscriptions", async () => {
		const items = [
			{ price: { id: "price_starter", lookup_key: null } },
		] as Stripe.SubscriptionItem[];

		const result = await resolvePlanItem(options, items);
		expect(result?.item.price.id).toBe("price_starter");
		expect(result?.plan?.name).toBe("starter");
	});

	it("should return undefined for empty items", async () => {
		const result = await resolvePlanItem(options, []);
		expect(result).toBeUndefined();
	});

	it("should return item without plan for unmatched single-item", async () => {
		const items = [
			{ price: { id: "price_unknown", lookup_key: null } },
		] as Stripe.SubscriptionItem[];

		const result = await resolvePlanItem(options, items);
		expect(result?.item.price.id).toBe("price_unknown");
		expect(result?.plan).toBeUndefined();
	});

	it("should return matching plan item from multi-item subscription", async () => {
		const items = [
			{ price: { id: "price_seat_addon", lookup_key: null } },
			{ price: { id: "price_starter", lookup_key: null } },
		] as Stripe.SubscriptionItem[];

		const result = await resolvePlanItem(options, items);
		expect(result?.item.price.id).toBe("price_starter");
		expect(result?.plan?.name).toBe("starter");
	});

	it("should return undefined when no plan matches in multi-item", async () => {
		const items = [
			{ price: { id: "price_unknown_1", lookup_key: null } },
			{ price: { id: "price_unknown_2", lookup_key: null } },
		] as Stripe.SubscriptionItem[];

		const result = await resolvePlanItem(options, items);
		expect(result).toBeUndefined();
	});

	it("should match by lookup key", async () => {
		const optionsWithLookup = {
			subscription: {
				enabled: true,
				plans: [
					{ name: "starter", lookupKey: "lookup_starter" },
					{ name: "premium", lookupKey: "lookup_premium" },
				],
			},
		} as StripeOptions;

		const items = [
			{ price: { id: "price_seat", lookup_key: null } },
			{ price: { id: "price_foo", lookup_key: "lookup_premium" } },
		] as Stripe.SubscriptionItem[];

		const result = await resolvePlanItem(optionsWithLookup, items);
		expect(result?.item.price.id).toBe("price_foo");
		expect(result?.plan?.name).toBe("premium");
	});
});



