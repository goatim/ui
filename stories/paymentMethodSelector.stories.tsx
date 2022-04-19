import { ComponentStory, ComponentMeta } from '@storybook/react';
import { loadStripe, PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { JSXElementConstructor, useState } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import PaymentMethodSelector from '../src/payment/paymentMethodSelector';

interface Props {}

export default {
  title: 'Payment/PaymentMethodSelector',
  component: PaymentMethodSelector,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    PaymentMethod | StripePaymentMethod | null | undefined
  >();
  return (
    <Elements stripe={loadedStripe}>
      <PaymentMethodSelector
        paymentMethods={[paymentMethod1, paymentMethod2]}
        selectedPaymentMethod={selectedPaymentMethod}
        onSelectPaymentMethod={setSelectedPaymentMethod}
      />
    </Elements>
  );
};

export const Default = Template.bind({});

Default.args = {};
