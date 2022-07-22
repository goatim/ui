import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, League } from '@fridaygame/client';
import { BrowserRouter } from 'react-router-dom';
import ClubThumbnail, {
  ClubThumbnailSize,
  ClubThumbnailTheme,
} from '../../../src/soccer/clubs/clubThumbnail';

interface Props {
  size?: ClubThumbnailSize;
  theme?: ClubThumbnailTheme;
  leagueTo?: string;
}

export default {
  title: 'Soccer/ClubThumbnail',
  component: ClubThumbnail,
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
    leagueTo: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const league: League = {
  id: '1',
  name: 'Ligue 1',
  slug: 'ligue-1',
  description: '',
  icon: {
    id: '1',
    url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    large_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    medium_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    small_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    thumbnail_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
  },
};

const club: Club = {
  id: '1',
  league,
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  size,
  theme,
  leagueTo,
}: Props) => (
  <BrowserRouter>
    <ClubThumbnail club={club} size={size} theme={theme} leagueTo={leagueTo} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  theme: 'default',
};
