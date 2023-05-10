import { Asset, Club, Dividend, PhysicalEvent, Player } from '@goatim/client';
import { PhysicalEventThumbnail, PhysicalEventThumbnailTheme } from '../../../src';

interface Props {
  theme?: PhysicalEventThumbnailTheme;
}

export default {
  title: 'Soccer/PhysicalEventThumbnail',
  component: PhysicalEventThumbnail,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: {
        type: 'select',
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

const dividends: Dividend[] = [
  {
    id: 'di_qedqd54qd5',
    asset,
    percentage: 376,
    coins: 3200,
    nb_distributed: 75,
  },
  {
    id: 'di_qeqzd54qd5',
    asset,
    percentage: 458,
    coins: 6500,
    nb_distributed: 88,
  },
];

const physicalEvent: PhysicalEvent = {
  id: 'ph_qedfz489',
  type: 'match',
  name: 'PSG - FC Nantes',
  beginning: '2022-04-29T09:54:52.696+02:00',
  end: '2022-05-20T09:54:52.696+02:00',
  dividends,
};

function Template({ theme }: Props) {
  return <PhysicalEventThumbnail physicalEvent={physicalEvent} theme={theme} />;
}

export const Default = Template.bind({});
