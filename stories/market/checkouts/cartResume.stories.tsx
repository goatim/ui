import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, BoosterFactory, Club, Item, Player } from '@fridaygame/client';
import CartResume, { CartResumeSize } from '../../../src/market/cartResume';

interface Props {
  length?: number;
  size?: CartResumeSize;
}

export default {
  title: 'Market/CartResume',
  component: CartResume,
  argTypes: {
    length: {
      control: {
        type: 'number',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['narrow', 'normal'],
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
  name: 'Kylian Mbappé',
  number: 10,
  position: 'attacking_midfield',
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

const boosterFactory: BoosterFactory = {
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
    nb_shares: 2,
    price_limit: 75000,
    booster_factory: boosterFactory,
    unit_price: 200,
    unit_vat: 50,
    total_price: 200,
    total_vat: 50,
  },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ length, size }: Props) => (
  <CartResume items={Array(length).fill(item)} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  length: 2,
};
