import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@fridaygame/client';
import WalletOverview from '../../src/market/walletOverview';

interface Props {}

export default {
  title: 'Market/WalletOverview',
  component: WalletOverview,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

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
  amount: 420000,
  portfolios_quotation: 785200,
  portfolios_session_variation: 45,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <WalletOverview wallet={wallet} />
);

export const Default = Template.bind({});

Default.args = {};
