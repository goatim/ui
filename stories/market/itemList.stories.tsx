import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Booster, Club, Item, Player } from '@fridaygame/client';
import ItemList from '../../src/market/itemList';

interface Props {
  length?: number;
}

export default {
  title: 'Market/ItemList',
  component: ItemList,
  argTypes: {
    length: {
      control: {
        type: 'number',
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

const booster: Booster = {
  id: 'bo_ied5',
  name: 'Pavaaard !',
  slug: 'pavaaard',
  price: 200,
  leverage: 2,
  nb_in_wallet: 0,
};

const item: Item = {
  id: 'or_frsf54s56f',
  type: 'order',
  order: {
    asset,
    order_type: 'buy',
    quantity: 2,
    price_limit: 75000,
    booster,
    unit_price: 200,
    unit_vat: 50,
    total_price: 200,
    total_vat: 50,
  },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ length }: Props) => (
  <ItemList items={Array(length).fill(item)} />
);

export const Default = Template.bind({});

Default.args = {
  length: 8,
};