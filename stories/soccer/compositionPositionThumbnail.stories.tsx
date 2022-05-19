import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, Player } from '@fridaygame/client';
import CompositionPositionThumbnail, {
  CompositionPositionThumbnailTheme,
} from '../../src/soccer/compositionPositionThumbnail';

interface Props {
  theme?: CompositionPositionThumbnailTheme;
}

export default {
  title: 'Soccer/CompositionPositionThumbnail',
  component: CompositionPositionThumbnail,
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <CompositionPositionThumbnail player={player} theme={theme} onDelete={() => undefined} />
);

export const Default = Template.bind({});

Default.args = {
  theme: 'default',
};
