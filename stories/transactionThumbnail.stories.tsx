import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Player, Transaction, Wallet } from '@fridaygame/client';
import { BrowserRouter } from 'react-router-dom';
import TransactionThumbnail from '../src/trading/transactionThumbnail';

interface Props {}

export default {
  title: 'Trading/TransactionThumbnail',
  component: TransactionThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const club: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  description: '',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const player: Player = {
  id: '1',
  club,
  name: 'Kylian Mbappé',
  number: 10,
  position: 'attacking_midfield',
  side: 'left',
  textual_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  name: 'Kylian Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  shares: 450,
  quotation: 2750,
  session_variation: 345,
  player,
};

const from: Wallet = {
  id: 'wa_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Smart Monkey',
};

const to: Wallet = {
  id: 'wa_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Lovely Mouse',
};

const transaction: Transaction = {
  id: 'tr_cUkDdk9VW4PwvsF',
  creation: '2021-09-29T16:08:39.129+00:00',
  asset,
  from,
  to,
  quantity: 42,
  price: 45000,
  asset_quotation_gain: 3500,
  asset_quotation_variation: 150,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <BrowserRouter>
    <TransactionThumbnail transaction={transaction} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {};
