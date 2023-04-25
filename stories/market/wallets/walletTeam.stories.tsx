import { User, Wallet } from '@goatim/client';
import { WalletTeam } from '../../../src';

export default {
  title: 'Market/WalletTeam',
  component: WalletTeam,
  argTypes: {},
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

function Template() {
  return <WalletTeam wallet={wallet} />;
}

export const Default = Template.bind({});
