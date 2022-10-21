import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { CurrenciesRate, Currency } from '@fridaygame/client';
import CurrenciesRateThumbnail from '../../../src/market/currenciesRates/currenciesRateThumbnail';

interface Props {}

export default {
  title: 'Market/CurrenciesRateThumbnail',
  component: CurrenciesRateThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const fridayCoin: Currency = {
  id: 'cu_RO0C0',
  name: 'Friday coin',
  iso: 'FDY',
  symbol: 'FDY',
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
  rate: 0.000066049107511435,
  base_currency: fridayCoin,
  target_currency: ether,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <CurrenciesRateThumbnail currenciesRate={currenciesRate} />
);

export const Default = Template.bind({});

Default.args = {};
