import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field, Form } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import { CreditCardInput } from '../../src';

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
