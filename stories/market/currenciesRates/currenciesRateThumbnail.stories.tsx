import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { CurrenciesRate, Currency } from '@goatim/client';
import { CurrenciesRateThumbnail } from '../../../src';

interface Props {}

export default {
  title: 'Market/CurrenciesRateThumbnail',
  component: CurrenciesRateThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const goatimCoin: Currency = {
  id: 'cu_RO0C0',
  name: 'Goatim coin',
  iso: 'GTC',
  symbol: 'GTC',
  smallest_unit: '0.001',
};

const ether: Currency = {
  id: 'cu_bU6NC',
  name: 'Ether',
  iso: 'ETH',
  symbol: 'ETH',
  smallest_unit: '0.0000000000000000001',
};

const currenciesRate: CurrenciesRate = {
  id: 'cr_2szb4',
  rate: 0.0000066049107511435,
  base_currency: goatimCoin,
  target_currency: ether,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <CurrenciesRateThumbnail currenciesRate={currenciesRate} />
);

export const Default = Template.bind({});

Default.args = {};
