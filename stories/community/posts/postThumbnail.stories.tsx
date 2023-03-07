import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import {
  Asset,
  Club,
  Composition,
  Match,
  Pack,
  PackFactory,
  Player,
  Post,
  PostTypeMap,
  Transaction,
  Wallet,
} from '@goatim/client';
import { PostThumbnail } from '../../../src';

interface Props {
  type?: keyof PostTypeMap;
}

export default {
  title: 'Community/PostThumbnail',
  component: PostThumbnail,
  argTypes: {
    type: {
      control: 'select',
      options: ['orders', 'transaction', 'pack', 'match_summary'],
    },
  },
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
  name: 'Kylian Mabappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 345,
  player,
};

const wallet: Wallet = {
  id: 'wa_eqdqd',
  name: 'David Coperfield',
};

const transaction: Transaction = {
  id: 'tr_deejdqked64',
  asset,
  from: wallet,
  to: wallet,
  price: 42000,
};

const packFactory: PackFactory = {
  id: 'pf_cUkDdk9VW4PwvsF',
  creation: '2021-09-29T16:08:39.129+00:00',
  name: 'Gold',
};

const pack: Pack = {
  id: 'pa_cUkDdk9VW4PwvsF',
  creation: '2021-09-29T16:08:39.129+00:00',
  factory: packFactory,
  valuation: 42000,
  share_bulks: [
    {
      asset,
      nb_shares: 2,
    },
    {
      asset,
      nb_shares: 1,
    },
    {
      asset,
      nb_shares: 2,
    },
    {
      asset,
      nb_shares: 2,
    },
  ],
  tags: ['starter'],
};

const match: Match = {
  id: 'ma_hqedh654qed',
  creator: wallet,
  title: 'Match de la semaine',
  slug: 'match-de-la-semaine',
  beginning: '2022-10-29T09:54:52.696+02:00',
  end: '2023-06-20T09:54:52.696+02:00',
  is_public: true,
  nb_participants: 213,
};

const composition: Composition = {
  id: 'co_qkuehd456',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?a=a',
    },
    name: 'Leo',
    amount: 40000000,
  },
  position: 1,
  dividends_percentage: 1.23,
  dividends_gains: 45000,
  score: 1230,
};

const ordersPost: Post<'orders'> = {
  id: 'ps_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  publication_date: '2022-06-23T17:31:41.171+02:00',
  type: 'orders',
  payload: [
    {
      id: '1',
      type: 'buy',
      nb_shares: 42,
      price_limit: 42200,
      asset,
    },
    {
      id: '2',
      type: 'sell',
      nb_shares: 42,
      price_limit: 42200,
      asset,
    },
  ],
};

const transactionPost: Post<'transaction'> = {
  id: 'ps_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  publication_date: '2022-06-23T17:31:41.171+02:00',
  type: 'transaction',
  payload: {
    transaction,
  },
};

const packPost: Post<'pack'> = {
  id: 'ps_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  publication_date: '2022-06-23T17:31:41.171+02:00',
  type: 'pack',
  payload: {
    pack,
  },
};

const matchSummaryPost: Post<'match_summary'> = {
  id: 'ps_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  publication_date: '2022-06-23T17:31:41.171+02:00',
  type: 'match_summary',
  title: 'Match terminé !',
  payload: {
    match,
    podium: [
      { ...composition, position: 1 },
      { ...composition, position: 2 },
      { ...composition, position: 3 },
    ],
    self: composition,
  },
};

const posts = {
  orders: ordersPost,
  transaction: transactionPost,
  pack: packPost,
  match_summary: matchSummaryPost,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ type = 'orders' }: Props) => (
  <PostThumbnail post={posts[type]} />
);

export const Default = Template.bind({});
