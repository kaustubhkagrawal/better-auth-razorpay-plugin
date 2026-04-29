export const RAZORPAY_ERROR_CODES = {
  INVALID_PAYMENT_SIGNATURE: "Invalid Razorpay payment signature.",
  INVALID_ORDER_AMOUNT: "Razorpay order amount must be at least 100 subunits for INR.",
  INVALID_PARTIAL_PAYMENT: "firstPaymentMinAmount can only be used when partialPayment is true.",
} as const;
