import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
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
  decorators: [(story) => <Form>{story()}</Form>],
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label }: Props) => {
  return <Field name="test" component={DateTimePicker} label={label} />;
};

export const Default = Template.bind({});
