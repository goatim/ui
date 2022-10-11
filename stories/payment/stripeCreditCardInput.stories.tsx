import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { JSXElementConstructor } from 'react';
import StripeCreditCardInput from '../../src/payment/stripeCreditCardInput';

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
} as ComponentMeta<JSXElementConstructor<Props>>;

const loadedStripe = loadStripe(process.env.STORYBOOK_STRIPE_PUBLIC_API_KEY || '');

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label }: Props) => (
  <Elements stripe={loadedStripe}>
    <Form>
      <Field name="counter" component={StripeCreditCardInput} label={label} />
    </Form>
  </Elements>
);

export const Default = Template.bind({});

Default.args = {};
