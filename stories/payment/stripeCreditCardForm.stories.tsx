import { ComponentStory, ComponentMeta } from '@storybook/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { JSXElementConstructor } from 'react';
import { StripeCreditCardForm } from '../../src';

interface Props {}

export default {
  title: 'Payment/StripeCreditCardForm',
  component: StripeCreditCardForm,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const loadedStripe = loadStripe(process.env.STORYBOOK_STRIPE_PUBLIC_API_KEY || '');

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <Elements stripe={loadedStripe}>
    <StripeCreditCardForm />
  </Elements>
);

export const Default = Template.bind({});

Default.args = {};
