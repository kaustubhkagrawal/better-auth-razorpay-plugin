import type { BetterAuthClientPlugin } from "better-auth/client";

import type { razorpayPlugin } from "./index.js";

export const razorpayClientPlugin = () =>
  ({
    id: "razorpay",
    $InferServerPlugin: {} as ReturnType<typeof razorpayPlugin>,
    pathMethods: {
      "/razorpay/create-order": "POST",
      "/razorpay/verify-payment": "POST",
    },
  }) satisfies BetterAuthClientPlugin;
