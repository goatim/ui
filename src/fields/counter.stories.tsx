import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import Counter from './counter';

interface Props {
  label?: string;
}

export default {
  title: 'Fields/Counter',
  component: Counter,
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
    <Field<number | undefined> name="counter" component={Counter} label={label} />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
