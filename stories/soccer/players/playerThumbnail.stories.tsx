import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Player, Club } from '@fridaygame/client';
import { BrowserRouter } from 'react-router-dom';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from '../../../src/soccer/players/playerThumbnail';

interface Props {
  size?: PlayerThumbnailSize;
  theme?: PlayerThumbnailTheme;
  clubTo?: string;
}

export default {
  title: 'Soccer/PlayerThumbnail',
  component: PlayerThumbnail,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big', 'full'],
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['default', 'light'],
      control: {
        type: 'radio',
      },
    },
    clubTo: {
      control: {
        type: 'text',
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, theme, clubTo }: Props) => (
  <BrowserRouter>
    <PlayerThumbnail player={player} size={size} theme={theme} clubTo={clubTo} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  theme: 'default',
};
