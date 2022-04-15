import { ComponentStory, ComponentMeta } from '@storybook/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { JSXElementConstructor } from 'react';
import CreditCardForm from '../src/payment/creditCardForm';

interface Props {}

export default {
  title: 'Payment/CreditCardForm',
  component: CreditCardForm,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const loadedStripe = loadStripe(process.env.STORYBOOK_STRIPE_PUBLIC_API_KEY || '');

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <Elements stripe={loadedStripe}>
    <CreditCardForm />
  </Elements>
);

export const Default = Template.bind({});

Default.args = {};
