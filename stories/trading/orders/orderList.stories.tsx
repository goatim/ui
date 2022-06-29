import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Player, Club, Order, Booster, OrderType } from '@fridaygame/client';
import OrderList from '../../../src/trading/orders/orderList';

interface Props {
  type?: OrderType;
  booster_selected?: boolean;
  has_booster_in_wallet?: boolean;
  on_cancel_defined?: boolean;
}

export default {
  title: 'Trading/OrderList',
  component: OrderList,
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
  total_shares: 450,
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

const order: Order = {
  id: 'or_frsf54s56f',
  type: 'buy',
  asset,
  nb_shares: 2,
  price_limit: 75000,
  booster,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <OrderList orders={Array(8).fill(order)} />
);

export const Default = Template.bind({});

Default.args = {
  type: 'buy',
  booster_selected: true,
  has_booster_in_wallet: false,
  on_cancel_defined: false,
};