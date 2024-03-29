import { Rank, User, Wallet } from '@goatim/client';
import { WalletRanking, WalletRankingTheme } from '../../../src';

interface Props {
  theme?: WalletRankingTheme;
}

export default {
  title: 'Market/WalletRanking',
  component: WalletRanking,
  argTypes: {
    theme: {
      control: {
        options: ['dark', 'light'],
        type: 'select',
      },
    },
  },
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

const rank: Rank = {
  id: 'ra_qedf5',
  name: 'Ligue de plomb',
  position: 42,
};

const wallets: Wallet[] = [
  {
    id: 'wa_sopsaA',
    owner,
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200',
    },
    name: 'Smart Monkey',
    coins: 420000,
    portfolios_quotation: 785200,
    portfolios_session_variation: 45,
    rank,
    rank_position: 1,
    total_gains: 45000,
  },
  {
    id: 'wa_sopqzdsaA',
    owner,
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200',
    },
    name: 'Dirty Dog',
    coins: 420000,
    portfolios_quotation: 785200,
    portfolios_session_variation: 45,
    rank,
    rank_position: 2,
    total_gains: 56000,
  },
  {
    id: 'wa_soqdz59psaA',
    owner,
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200',
    },
    name: 'Furious Cat',
    coins: 420000,
    portfolios_quotation: 785200,
    portfolios_session_variation: 45,
    rank,
    rank_position: 3,
    total_gains: -5000,
  },
];

const pinned: Wallet = {
  id: 'wa_soqqzdfpsaA',
  owner,
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Tenacious Goat',
  coins: 420000,
  portfolios_quotation: 785200,
  portfolios_session_variation: 45,
  rank,
  rank_position: 12,
};

function Template({ theme }: Props) {
  return (
    <WalletRanking
      wallets={wallets}
      pinned={pinned}
      theme={theme}
      positionExtractor={(wallet) => wallet.rank_position || 0}
      gainsExtractor={(wallet) => wallet.total_gains || 0}
    />
  );
}

export const Default = Template.bind({});
