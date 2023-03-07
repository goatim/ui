import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@goatim/client';
import { WalletTeam } from '../../../src';

interface Props {}

export default {
  title: 'Market/WalletTeam',
  component: WalletTeam,
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
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <WalletTeam wallet={wallet} />
);

export const Default = Template.bind({});

Default.args = {};
