import { Club, Player } from '@goatim/client';
import { PlayerListItem, PlayerListItemSize, PlayerListItemTheme } from '../../../src';

interface Props {
  size?: PlayerListItemSize;
  theme?: PlayerListItemTheme;
  clubHref?: string;
}

export default {
  title: 'Football/PlayerListItem',
  component: PlayerListItem,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big', 'full'],
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['dark', 'light'],
      control: {
        type: 'radio',
      },
    },
    clubHref: {
      control: {
        type: 'text',
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
  side: 'center',
  resolved_position: 'Attaquant centre',
  resolved_short_position: 'ATT',
};

function Template({ size, theme, clubHref }: Props) {
  return <PlayerListItem player={player} size={size} theme={theme} clubHref={clubHref} />;
}

export const Default = Template.bind({});
