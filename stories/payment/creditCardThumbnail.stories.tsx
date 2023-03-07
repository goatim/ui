import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Card } from '@goatim/client';
import { CreditCardThumbnail } from '../../src';

interface Props {}

export default {
  title: 'Payment/CreditCardThumbnail',
  component: CreditCardThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const card: Card = {
  country: 'fr',
  brand: 'mastercard',
  exp_month: 7,
  exp_year: 2022,
  last4: '4444',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <CreditCardThumbnail card={card} />
);

export const Default = Template.bind({});

Default.args = {};
