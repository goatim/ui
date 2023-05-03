import { Wallet } from '@goatim/client';
import { WalletAmountDetail, WalletAmountDetailSize } from '../../../src';

interface Props {
  size?: WalletAmountDetailSize;
}

export default {
  title: 'Market/WalletAmountDetail',
  component: WalletAmountDetail,
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
  amount: 88000,
  portfolios_quotation: 785200,
  portfolios_session_variation: 45,
  withdrawable_amount: 100000,
};

function Template({ size }: Props) {
  return <WalletAmountDetail wallet={wallet} size={size} />;
}

export const Default = Template.bind({});
