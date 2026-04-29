export type RazorpayPluginOptions = {
  /**
   * Razorpay key id. Keep this server-side.
   */
  keyId: string;
  /**
   * Razorpay key secret. Keep this server-side.
   */
  keySecret: string;
  /**
   * Default currency used when createOrder omits one.
   *
   * @default "INR"
   */
  defaultCurrency?: string | undefined;
  /**
   * Require a Better Auth session for plugin endpoints.
   *
   * @default true
   */
  requireSession?: boolean | undefined;
};

export type RazorpayNotes = Record<string, string | number | null>;

export type CreateRazorpayOrderInput = {
  amount: number;
  currency?: string | undefined;
  receipt?: string | undefined;
  notes?: RazorpayNotes | undefined;
  partialPayment?: boolean | undefined;
  firstPaymentMinAmount?: number | undefined;
};

export type VerifyRazorpayPaymentInput = {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
};

export type RazorpayOrderResponse = {
  id: string;
  entity: string;
  amount: number;
  amountPaid: number;
  amountDue: number;
  currency: string;
  receipt: string | null;
  status: string;
  attempts: number;
  notes: RazorpayNotes;
  createdAt: number;
};

export type RazorpayPaymentResponse = {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  status: string;
  orderId: string | null;
  invoiceId: string | null;
  method: string;
  captured: boolean;
  amountRefunded: number;
  refundStatus: string | null;
  email: string | null;
  contact: string | null;
  notes: RazorpayNotes;
  errorCode: string | null;
  errorDescription: string | null;
  createdAt: number;
};

export type VerifyRazorpayPaymentResponse = {
  valid: boolean;
};
