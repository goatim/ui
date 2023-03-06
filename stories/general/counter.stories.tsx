import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import { adaptFridayCoins, resolveFridayCoins } from '@fridaygame/client';
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
      label={label || 'Montant (FDY)'}
      resolver={resolveFridayCoins}
      adapter={adaptFridayCoins}
      increment={100}
      initialValue={42000}
      conversion="0.002 ETH"
    />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
