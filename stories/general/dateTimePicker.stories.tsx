import { Field, Form } from '@cezembre/forms';
import { DateTimePicker } from '../../src';

interface Props {
  label?: string;
}

export default {
  title: 'General/DateTimePicker',
  component: DateTimePicker,
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
      <Field name="test" component={DateTimePicker} label={label} />
    </Form>
  );
}

export const Default = Template.bind({});
