import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, Composition, CompositionSetting, Player } from '@fridaygame/client';
import CompositionPositionMap, {
  CompositionPositionMapTheme,
} from '../../../src/soccer/compositions/compositionPositionMap';

interface Props {
  theme?: CompositionPositionMapTheme;
}

export default {
  title: 'Soccer/CompositionPositionMap',
  component: CompositionPositionMap,
  argTypes: {
    theme: {
      options: ['default', 'light'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

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
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const club_without_icon: Club = {
  id: '2',
  name: 'FC Nantes',
  slug: 'fc-nantes',
  description: '',
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

const player_without_icon: Player = {
  id: '2',
  club: club_without_icon,
  name: 'Thibault Hernandez',
  number: 10,
  position: 'attacking_midfield',
  side: 'left',
  textual_position: 'Attaquant centre',
};

const composition: Composition = {
  id: 'co_qkuehd456',
  goalkeeper: player,
  positions: [
    {
      id: '5',
      player,
    },
    {
      id: '3',
      player: player_without_icon,
    },
  ],
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <div style={{ width: 400 }}>
    <CompositionPositionMap
      theme={theme}
      compositionSetting={compositionSetting}
      composition={composition}
      onPositionClick={console.log}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  theme: 'default',
};
