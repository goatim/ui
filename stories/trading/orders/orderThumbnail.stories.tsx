import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Player, Club, Order, Booster, OrderType } from '@fridaygame/client';
import OrderThumbnail, { OrderThumbnailSize } from '../../../src/trading/orders/orderThumbnail';

interface Props {
  type?: OrderType;
  size?: OrderThumbnailSize;
  booster_selected?: boolean;
  has_booster_in_wallet?: boolean;
  on_cancel_defined?: boolean;
}

export default {
  title: 'Trading/OrderThumbnail',
  component: OrderThumbnail,
  argTypes: {
    type: {
      options: ['buy', 'sell'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['narrow', 'normal'],
      control: {
        type: 'select',
      },
    },
    booster_selected: {
      control: {
        type: 'boolean',
      },
    },
    has_booster_in_wallet: {
      control: {
        type: 'boolean',
      },
    },
    on_cancel_defined: {
      control: {
        type: 'boolean',
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
  first_name: 'Kylian',
  last_name: 'Mbappé',
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  type,
  size,
  booster_selected,
  has_booster_in_wallet,
  on_cancel_defined,
}: Props) => (
  <OrderThumbnail
    order={{
      ...order,
      type,
      booster:
        booster_selected && order.booster && typeof order.booster === 'object'
          ? { ...order.booster, nb_in_wallet: has_booster_in_wallet ? 4 : 0 }
          : undefined,
    }}
    onCancel={on_cancel_defined ? () => undefined : undefined}
    size={size}
  />
);

export const Default = Template.bind({});

Default.args = {
  type: 'buy',
  booster_selected: true,
  has_booster_in_wallet: false,
  on_cancel_defined: false,
};
