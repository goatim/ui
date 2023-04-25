import { Asset, Club, Order, OrderType, Player } from '@goatim/client';
import { OrderList } from '../../../src';

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
};

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

const order: Order = {
  id: 'or_frsf54s56f',
  type: 'buy',
  asset,
  nb_shares: 2,
  price_limit: 75000,
};

function Template() {
  return <OrderList orders={Array(8).fill(order)} />;
}

export const Default = Template.bind({});
