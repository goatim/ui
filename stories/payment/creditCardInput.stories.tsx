import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import CreditCardInput from '../../src/payment/creditCardInput';

interface Props {
  label?: string;
}

export default {
  title: 'Payment/CreditCardInput',
  component: CreditCardInput,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label }: Props) => (
  <Form>
    <Field name="credit-card" component={CreditCardInput} label={label} />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
