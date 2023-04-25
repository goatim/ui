import { Field, Form } from '@cezembre/forms';
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
};

function Template({ label }: Props) {
  return (
    <Form>
      <Field name="credit-card" component={CreditCardInput} label={label} />
    </Form>
  );
}

export const Default = Template.bind({});
