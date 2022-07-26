import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Player, Club, Booster } from '@fridaygame/client';
import AssetOverview from '../../../src/trading/assets/assetOverview';

interface Props {}

export default {
  title: 'Trading/AssetOverview',
  component: AssetOverview,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
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

const boosters: Booster[] = [
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <AssetOverview asset={asset} boosters={boosters} />
);

export const Default = Template.bind({});

Default.args = {};
