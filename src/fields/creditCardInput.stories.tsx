import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { JSXElementConstructor } from 'react';
import CreditCardInput from './creditCardInput';

interface Props {
  label?: string;
}

export default {
  title: 'Fields/CreditCardInput',
  component: CreditCardInput,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const loadedStripe = loadStripe('pk_test_2VpiLGfc5mIdtddlIFsi0quj00ZVel1Ppx');

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label }: Props) => (
  <Elements stripe={loadedStripe}>
    <Form>
      <Field name="counter" component={CreditCardInput} label={label} />
    </Form>
  </Elements>
);

export const Default = Template.bind({});

Default.args = {};
