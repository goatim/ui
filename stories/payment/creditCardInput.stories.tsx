import { Field, Form } from '@cezembre/forms';
import { CreditCardInput, CreditCardInputProps } from '../../src';

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
};

function Template({ label, size }: CreditCardInputProps) {
  return (
    <Form>
      <Field name="credit-card" component={CreditCardInput} label={label} size={size} />
    </Form>
  );
}

export const Default = Template.bind({});
