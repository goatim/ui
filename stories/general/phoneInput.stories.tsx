import { Field, Form } from '@cezembre/forms';
import { PhoneInput } from '../../src';

export default {
  title: 'General/PhoneInput',
  component: PhoneInput,
};

function Template() {
  return (
    <Form>
      <Field
        name="input"
        component={PhoneInput}
        label="Téléphone"
        initialValue={{ number: '', region_code: 'FR' }}
      />
    </Form>
  );
}

export const Default = Template.bind({});
