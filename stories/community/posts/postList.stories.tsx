import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import {
  Asset,
  Club,
  Pack,
  PackFactory,
  Player,
  Post,
  Transaction,
  Wallet,
} from '@fridaygame/client';
import { PostList } from '../../../src';
import { PostThumbnailSize } from '../../../src';

interface Props {
  size?: PostThumbnailSize;
}

export default {
  title: 'Community/PostList',
  component: PostList,
  argTypes: {
    size: {
      options: ['narrow', 'normal'],
      control: {
        type: 'select',
      },
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
  name: 'Kylian Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 0.02,
  player,
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

const transactionPost: Post<'transaction'> = {
  id: 'ps_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  publication_date: '2022-06-23T17:31:41.171+02:00',
  type: 'transaction',
  payload: {
    transaction,
  },
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

const packPost: Post<'pack'> = {
  id: 'ps_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  publication_date: '2022-06-23T17:31:41.171+02:00',
  type: 'pack',
  payload: {
    pack,
  },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size }: Props) => (
  <PostList posts={[ordersPost, transactionPost, packPost]} size={size} />
);

export const Default = Template.bind({});
