import { Wallet } from '@goatim/client';
import { WalletCoinsDetail, WalletCoinsDetailSize } from '../../../src';

interface Props {
  size?: WalletCoinsDetailSize;
}

export default {
  title: 'Market/WalletCoinsDetail',
  component: WalletCoinsDetail,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['narrow', 'normal'],
      },
    },
  },
};

const wallet: Wallet = {
  id: 'wa_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Smart Monkey',
  coins: 88000,
  portfolios_quotation: 785200,
  portfolios_session_variation: 45,
  withdrawable_coins: 100000,
};

function Template({ size }: Props) {
  return <WalletCoinsDetail wallet={wallet} size={size} />;
}

export const Default = Template.bind({});
