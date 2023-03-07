import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field, Form } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import { adaptGoatimCoins, resolveGoatimCoins } from '@goatim/client';
import { Counter } from '../../src';

interface Props {
  label?: string;
}

export default {
  title: 'General/Counter',
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
    <Field<number | undefined>
      name="counter"
      component={Counter}
      label={label || 'Montant (GTC)'}
      resolver={resolveGoatimCoins}
      adapter={adaptGoatimCoins}
      increment={100}
      initialValue={42000}
      conversion="0.002 ETH"
    />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
