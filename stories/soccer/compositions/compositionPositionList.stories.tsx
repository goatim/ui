import { Club, CompositionPosition, Player } from '@goatim/client';
import { CompositionPositionList, CompositionPositionListTheme } from '../../../src';

interface Props {
  theme?: CompositionPositionListTheme;
}

export default {
  title: 'Soccer/CompositionPositionList',
  component: CompositionPositionList,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: {
        type: 'radio',
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

const positions: CompositionPosition[] = [
  {
    id: '5',
    player,
    nb_shares: 3,
  },
  {
    id: '3',
    player,
    nb_shares: 4,
  },
];

function Template({ theme }: Props) {
  return (
    <div style={{ width: 400 }}>
      <CompositionPositionList
        theme={theme}
        compositionPositions={positions}
        onPositionClick={console.log}
      />
    </div>
  );
}

export const Default = Template.bind({});
