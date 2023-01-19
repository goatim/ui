import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Player, Club, BoosterFactory, OrderBook, OrderType } from '@fridaygame/client';
import ItemEditor, { ItemEditorSize } from '../../../src/market/checkouts/itemEditor';

interface Props {
  size?: ItemEditorSize;
  orderType?: OrderType;
}

export default {
  title: 'Market/ItemEditor',
  component: ItemEditor,
  argTypes: {
    orderType: {
      control: {
        type: 'select',
        options: ['buy', 'sell'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['narrow', 'small', 'medium', 'big'],
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
  day_variation: 345,
  player,
};

const boosterFactories: BoosterFactory[] = [
  {
    id: 'bo_ied5',
    name: 'Pavaaard !',
    slug: 'pavaaard',
    price: 100,
    leverage: 2,
    nb_in_wallet: 10,
  },
  {
    id: 'bo_iqzd',
    name: 'Charo',
    slug: 'charo',
    price: 150,
    leverage: 5,
    nb_in_wallet: 0,
  },
  {
    id: 'bo_qzdi',
    name: 'Zizou',
    slug: 'zizou',
    price: 2,
    leverage: 10,
    nb_in_wallet: 0,
  },
];

const orderBook: OrderBook = {
  buying: [
    {
      nb_orders: 3,
      total_shares: 450,
      price_limit: 45000,
    },
    {
      nb_orders: 6,
      total_shares: 7850,
      price_limit: 44200,
    },
    {
      nb_orders: 10,
      total_shares: 658,
      price_limit: 44100,
    },
    {
      nb_orders: 3,
      total_shares: 47,
      price_limit: 40000,
    },
    {
      nb_orders: 56,
      total_shares: 9892,
      price_limit: 39000,
    },
  ],
  selling: [
    {
      nb_orders: 56,
      total_shares: 450,
      price_limit: 47000,
    },
    {
      nb_orders: 2,
      total_shares: 7850,
      price_limit: 48000,
    },
    {
      nb_orders: 4,
      total_shares: 456,
      price_limit: 49100,
    },
    {
      nb_orders: 5,
      total_shares: 47,
      price_limit: 52000,
    },
    {
      nb_orders: 5,
      total_shares: 9892,
      price_limit: 60000,
    },
  ],
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, orderType }: Props) => (
  <ItemEditor
    initialItem={{
      type: 'order',
      order: {
        asset,
        order_type: orderType,
        price_limit: asset.quotation,
        nb_shares: 1,
      },
    }}
    orderBook={orderBook}
    boosterFactories={boosterFactories}
    onSubmit={(item) => console.log(item)}
    onCancel={() => undefined}
    size={size}
  />
);

export const Default = Template.bind({});

Default.args = {};
