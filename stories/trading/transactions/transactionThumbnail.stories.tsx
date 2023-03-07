import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Player, Transaction, Wallet } from '@goatim/client';
import { BrowserRouter } from 'react-router-dom';
import { TransactionThumbnail } from '../../../src';

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
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const player: Player = {
  id: '1',
  club,
  first_name: 'Kylian',
  last_name: 'Mbappé',
  number: 10,
  position: 'forward',
  resolved_short_position: 'ATT',
  side: 'left',
  resolved_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  first_name: 'Kylian',
  last_name: 'Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 0.34,
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
  nb_shares: 42,
  price: 45000,
  asset_quotation_gain: 3500,
  asset_quotation_variation: 0.01,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <BrowserRouter>
    <TransactionThumbnail transaction={transaction} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {};
