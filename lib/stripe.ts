import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
})

export const createPaymentIntent = async (amount: number, metadata: any) => {
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency: 'usd',
    metadata,
    automatic_payment_methods: {
      enabled: true,
    },
  })
}

export const createCheckoutSession = async (
  priceId: string,
  customerId: string | undefined,
  metadata: any,
  successUrl: string,
  cancelUrl: string
) => {
  return await stripe.checkout.sessions.create({
    mode: 'payment',
    customer: customerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata,
    success_url: successUrl,
    cancel_url: cancelUrl,
  })
}

export const createSubscriptionCheckout = async (
  priceId: string,
  customerId: string | undefined,
  customerEmail: string,
  metadata: any,
  successUrl: string,
  cancelUrl: string
) => {
  return await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer: customerId,
    customer_email: !customerId ? customerEmail : undefined,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata,
    success_url: successUrl,
    cancel_url: cancelUrl,
  })
}

export const createCustomer = async (email: string, name: string, metadata?: any) => {
  return await stripe.customers.create({
    email,
    name,
    metadata,
  })
}

export const createInvoice = async (customerId: string, description: string, amount: number) => {
  // Create invoice item
  await stripe.invoiceItems.create({
    customer: customerId,
    amount: Math.round(amount * 100),
    currency: 'usd',
    description,
  })

  // Create and finalize invoice
  const invoice = await stripe.invoices.create({
    customer: customerId,
    auto_advance: true, // Auto-finalize
  })

  return await stripe.invoices.finalizeInvoice(invoice.id)
}

export const cancelSubscription = async (subscriptionId: string) => {
  return await stripe.subscriptions.cancel(subscriptionId)
}
