import { User, Wallet } from '@goatim/client';
import { WalletMetrics, WalletMetricsSize } from '../../../src';

interface Props {
  size?: WalletMetricsSize;
}

export default {
  title: 'Market/WalletMetrics',
  component: WalletMetrics,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['narrow', 'normal'],
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

const wallet: Wallet = {
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
};

function Template({ size }: Props) {
  return <WalletMetrics wallet={wallet} size={size} />;
}

export const Default = Template.bind({});
