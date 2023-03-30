import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field, Form } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import { PhoneInput } from '../../src';

export default {
  title: 'General/PhoneInput',
  component: PhoneInput,
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <Form>
    <Field
      name="input"
      component={PhoneInput}
      label="Téléphone"
      initialValue={{ number: '', region_code: 'FR' }}
    />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
