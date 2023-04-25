import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { StripeCreditCardForm } from '../../src';

export default {
  title: 'Payment/StripeCreditCardForm',
  component: StripeCreditCardForm,
  argTypes: {},
};

const loadedStripe = loadStripe(process.env.STORYBOOK_STRIPE_PUBLIC_API_KEY || '');

function Template() {
  return (
    <Elements stripe={loadedStripe}>
      <StripeCreditCardForm />
    </Elements>
  );
}

export const Default = Template.bind({});
