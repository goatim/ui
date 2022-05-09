import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import Checkbox from '../../src/general/checkbox';

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
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label }: Props) => (
  <Form>
    <Field<boolean | undefined> name="checkbox" component={Checkbox} label={label} />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
