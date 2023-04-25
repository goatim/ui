import { StoryFn } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Order, OrderType, Player } from '@goatim/client';
import { OrderThumbnail, OrderThumbnailSize } from '../../../src';

interface Props {
  type?: OrderType;
  size?: OrderThumbnailSize;
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

    on_cancel_defined: {
      control: {
        type: 'boolean',
      },
    },
  },
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

const Template: StoryFn<JSXElementConstructor<Props>> = ({
  type,
  size,
  on_cancel_defined,
}: Props) => (
  <OrderThumbnail
    order={{
      ...order,
      type,
    }}
    onCancel={on_cancel_defined ? () => undefined : undefined}
    size={size}
  />
);
export const Default = Template.bind({});
