import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Checkout } from '@fridaygame/client';
import CheckoutBill from '../../../src/market/checkouts/checkoutBill';

interface Props {}

export default {
  title: 'Market/CheckoutBill',
  component: CheckoutBill,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const checkout: Checkout = {
  id: 'ch_dzqed546',
  items_prices: 4000,
  items_vats: 200,
  total_to_pay: 4200,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <CheckoutBill checkout={checkout} />
);

export const Default = Template.bind({});

Default.args = {};
