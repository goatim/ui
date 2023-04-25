import { Club, CompositionPosition, CompositionSetting, Player } from '@goatim/client';
import { CompositionPositionMap, CompositionPositionMapTheme } from '../../../src';

interface Props {
  theme?: CompositionPositionMapTheme;
}

export default {
  title: 'Soccer/CompositionPositionMap',
  component: CompositionPositionMap,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: {
        type: 'radio',
      },
    },
  },
};

const compositionSetting: CompositionSetting = {
  id: 'cs_edsefqed',
  name: '4-3-3',
  positions: [
    {
      id: '1',
      name: 'Arrière gauche',
      x: 0.15,
      y: 0.75,
    },
    {
      id: '2',
      name: 'Défenseur gauche',
      x: 0.35,
      y: 0.8,
    },
    {
      id: '3',
      name: 'Défenseur droit',
      x: 0.65,
      y: 0.8,
    },
    {
      id: '4',
      name: 'Arrière droit',
      x: 0.85,
      y: 0.75,
    },
    {
      id: '5',
      name: 'Ailier gauche',
      x: 0.25,
      y: 0.48,
    },
    {
      id: '6',
      name: 'Milieu de terrain',
      x: 0.5,
      y: 0.58,
    },
    {
      id: '7',
      name: 'Ailier droit',
      x: 0.75,
      y: 0.48,
    },
    {
      id: '8',
      name: 'Attaquant gauche',
      x: 0.15,
      y: 0.3,
    },
    {
      id: '9',
      name: 'Attaquant centre',
      x: 0.5,
      y: 0.2,
    },
    {
      id: '10',
      name: 'Attaquant droit',
      x: 0.85,
      y: 0.3,
    },
  ],
  is_default: true,
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
  },
  {
    id: '4',
    player,
  },
  {
    id: '2',
    player,
  },
  {
    id: '3',
    player,
  },
];

function Template({ theme }: Props) {
  return (
    <div style={{ width: 400 }}>
      <CompositionPositionMap
        theme={theme}
        compositionSetting={compositionSetting}
        positions={positions}
        onPositionClick={console.log}
      />
    </div>
  );
}

export const Default = Template.bind({});
