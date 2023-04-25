import { User, Wallet } from '@goatim/client';
import { WalletList } from '../../../src';

interface Props {
  length?: number;
}

export default {
  title: 'Market/WalletList',
  component: WalletList,
  argTypes: {
    length: {
      control: {
        type: 'number',
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
};

function Template({ length }: Props) {
  return <WalletList wallets={Array(length).fill(wallet)} total={35} />;
}

export const Default = Template.bind({});
