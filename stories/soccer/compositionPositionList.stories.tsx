import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, Composition, CompositionSetting, Player } from '@fridaygame/client';
import CompositionPositionList, {
  CompositionPositionListTheme,
} from '../../src/soccer/compositionPositionList';

interface Props {
  theme?: CompositionPositionListTheme;
}

export default {
  title: 'Soccer/CompositionPositionList',
  component: CompositionPositionList,
  argTypes: {
    theme: {
      options: ['default', 'light'],
      control: {
        type: 'radio',
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
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
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
      player,
    },
  ],
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <div style={{ width: 400 }}>
    <CompositionPositionList
      theme={theme}
      composition={composition}
      onPositionClick={console.log}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  theme: 'default',
};
