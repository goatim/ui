import { Field, Form } from '@cezembre/forms';
import { Checkbox } from '../../src';

interface Props {
  label?: string;
}

export default {
  title: 'General/Checkbox',
  component: Checkbox,
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
      <Field<boolean> name="checkbox" component={Checkbox} label={label} />
    </Form>
  );
}

export const Default = Template.bind({});
