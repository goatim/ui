import { CurrenciesRate, Currency, User, Wallet } from '@goatim/client';
import { TradingBanner } from '../../src';

export default {
  title: 'Navigation/TradingBanner',
  component: TradingBanner,
  argTypes: {},
};

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

function Template() {
  return <TradingBanner goatimCoinsRate={currenciesRate} wallet={wallet} />;
}

export const Default = Template.bind({});
