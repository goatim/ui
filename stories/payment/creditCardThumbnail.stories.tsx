import { Card } from '@goatim/client';
import { CreditCardThumbnail } from '../../src';

export default {
  title: 'Payment/CreditCardThumbnail',
  component: CreditCardThumbnail,
  argTypes: {},
};

const card: Card = {
  country: 'fr',
  brand: 'mastercard',
  exp_month: 7,
  exp_year: 2022,
  last4: '4444',
};

function Template() {
  return <CreditCardThumbnail card={card} />;
}

export const Default = Template.bind({});
