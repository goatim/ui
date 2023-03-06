import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Player, Pack, PackFactory } from '@fridaygame/client';
import { BrowserRouter } from 'react-router-dom';
import { PackThumbnail } from '../../../src';

interface Props {}

export default {
  title: 'Trading/PackThumbnail',
  component: PackThumbnail,
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
  first_name: 'Kylian',
  last_name: 'Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 0.03,
  player,
};

const factory: PackFactory = {
  id: 'pf_cUkDdk9VW4PwvsF',
  creation: '2021-09-29T16:08:39.129+00:00',
  name: 'Gold',
};

const pack: Pack = {
  id: 'pa_cUkDdk9VW4PwvsF',
  creation: '2021-09-29T16:08:39.129+00:00',
  factory,
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <BrowserRouter>
    <PackThumbnail pack={pack} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {};
