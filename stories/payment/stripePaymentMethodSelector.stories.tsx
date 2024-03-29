import { loadStripe, PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { PaymentMethod } from '@goatim/client';
import { StripePaymentMethodSelector } from '../../src';

export default {
  title: 'Payment/StripePaymentMethodSelector',
  component: StripePaymentMethodSelector,
  argTypes: {},
};

const loadedStripe = loadStripe(process.env.STORYBOOK_STRIPE_PUBLIC_API_KEY || '');

const paymentMethod1: PaymentMethod = {
  id: 'pm_edsefsef',
  type: 'card',
  card: {
    country: 'fr',
    brand: 'mastercard',
    exp_month: 7,
    exp_year: 2022,
    last4: '4444',
  },
};

const paymentMethod2: PaymentMethod = {
  id: 'pm_edqzdd45ef',
  type: 'card',
  card: {
    country: 'fr',
    brand: 'visa',
    exp_month: 12,
    exp_year: 2026,
    last4: '3265',
  },
};

function Template() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    PaymentMethod | StripePaymentMethod | null | undefined
  >();
  return (
    <Elements stripe={loadedStripe}>
      <StripePaymentMethodSelector
        paymentMethods={[paymentMethod1, paymentMethod2]}
        selectedPaymentMethod={selectedPaymentMethod}
        onSelectPaymentMethod={setSelectedPaymentMethod}
      />
    </Elements>
  );
}

export const Default = Template.bind({});
