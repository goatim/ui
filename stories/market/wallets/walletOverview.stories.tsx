import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Rank, User, Wallet } from '@fridaygame/client';
import WalletOverview, { WalletOverviewSize } from '../../../src/market/wallets/walletOverview';

interface Props {
  size?: WalletOverviewSize;
}

export default {
  title: 'Market/WalletOverview',
  component: WalletOverview,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['narrow', 'normal'],
      },
    },
  },
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

const rank: Rank = {
  id: 'ra_qedf5',
  name: 'Ligue de plomb',
  position: 42,
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
  rank,
  rank_position: 12,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size }: Props) => (
  <WalletOverview wallet={wallet} size={size} />
);

export const Default = Template.bind({});
