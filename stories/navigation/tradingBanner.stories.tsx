import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { CurrenciesRate, Currency, User, Wallet } from '@fridaygame/client';
import TradingBanner from '../../src/navigation/tradingBanner';

interface Props {}

export default {
  title: 'Navigation/TradingBanner',
  component: TradingBanner,
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
  rate: 0.0000066049107511435,
  base_currency: fridayCoin,
  target_currency: ether,
};

const owner: User = {
  id: 'us_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  pseudo: 'Player 1',
  first_name: 'Lucien',
  last_name: 'Perouze',
};

const wallet: Wallet = {
  id: 'wa_sopsaA',
  owner,
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Smart Monkey',
  amount: 42000,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <TradingBanner fridayCoinsRate={currenciesRate} wallet={wallet} />
);

export const Default = Template.bind({});

Default.args = {};
