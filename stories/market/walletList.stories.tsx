import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@fridaygame/client';
import WalletList from '../../src/market/walletList';

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
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ length }: Props) => (
  <WalletList wallets={Array(length).fill(wallet)} total={35} />
);

export const Default = Template.bind({});

Default.args = {
  length: 8,
};
