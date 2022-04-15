import { ComponentStory, ComponentMeta } from '@storybook/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { JSXElementConstructor } from 'react';
import { Card, PaymentMethod } from '@fridaygame/client';
import PaymentMethodSelector from '../src/payment/paymentMethodSelector';

interface Props {}

export default {
  title: 'Payment/PaymentMethodSelector',
  component: PaymentMethodSelector,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const loadedStripe = loadStripe(process.env.STORYBOOK_STRIPE_PUBLIC_API_KEY || '');

const card: Card = {
  country: 'fr',
  brand: 'mastercard',
  exp_month: 7,
  exp_year: 2022,
  last4: '4444',
};

const paymentMethod: PaymentMethod = {
  id: 'pm_edsefsef',
  type: 'card',
  card,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <Elements stripe={loadedStripe}>
    <PaymentMethodSelector paymentMethods={[paymentMethod]} />
  </Elements>
);

export const Default = Template.bind({});

Default.args = {};
