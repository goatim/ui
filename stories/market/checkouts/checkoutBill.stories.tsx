import { Checkout } from '@goatim/client';
import { CheckoutBill } from '../../../src';

export default {
  title: 'Market/CheckoutBill',
  component: CheckoutBill,
  argTypes: {},
};

const checkout: Checkout = {
  id: 'ch_dzqed546',
  items_prices: 4000,
  items_vats: 200,
  total_to_pay: 4200,
};

function Template() {
  return <CheckoutBill checkout={checkout} />;
}

export const Default = Template.bind({});
