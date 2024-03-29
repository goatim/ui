import { useState } from 'react';
import { PaymentMethod } from '@goatim/client';
import { CreditCardFields, PaymentMethodSelector } from '../../src';

export default {
  title: 'Payment/PaymentMethodSelector',
  component: PaymentMethodSelector,
  argTypes: {},
};

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
  const [paymentMethods, setPaymentMethods] = useState<(PaymentMethod | CreditCardFields)[]>([
    paymentMethod1,
    paymentMethod2,
  ]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    PaymentMethod | CreditCardFields | null | undefined
  >();

  return (
    <PaymentMethodSelector
      paymentMethods={paymentMethods}
      selectedPaymentMethod={selectedPaymentMethod}
      onSelectPaymentMethod={setSelectedPaymentMethod}
    />
  );
}

export const Default = Template.bind({});
