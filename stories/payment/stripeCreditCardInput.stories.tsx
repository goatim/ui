import { Field, Form } from '@cezembre/forms';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { StripeCreditCardInput } from '../../src';

interface Props {
  label?: string;
}

export default {
  title: 'Payment/StripeCreditCardInput',
  component: StripeCreditCardInput,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
};

const loadedStripe = loadStripe(process.env.STORYBOOK_STRIPE_PUBLIC_API_KEY || '');

function Template({ label }: Props) {
  return (
    <Elements stripe={loadedStripe}>
      <Form>
        <Field name="counter" component={StripeCreditCardInput} label={label} />
      </Form>
    </Elements>
  );
}

export const Default = Template.bind({});
