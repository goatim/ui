import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Checkout } from '@fridaygame/client';
import { CheckoutBill } from '../../../src';

export default {
  title: 'Market/CheckoutBill',
  component: CheckoutBill,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<unknown>>;

const checkout: Checkout = {
  id: 'ch_dzqed546',
  items_prices: 4000,
  items_vats: 200,
  total_to_pay: 4200,
};

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <CheckoutBill checkout={checkout} />
);

export const Default = Template.bind({});

Default.args = {};
