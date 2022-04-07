import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, League } from '@fridaygame/client';
import { BrowserRouter } from 'react-router-dom';
import ClubThumbnail, {
  ClubThumbnailSize,
  ClubThumbnailTheme,
  LeagueTo,
} from '../src/soccer/clubThumbnail';

interface Props {
  size?: ClubThumbnailSize;
  theme?: ClubThumbnailTheme;
  leagueTo?: LeagueTo;
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
    url: 'https://www.ligue1.fr/-/media/Project/LFP/shared/Images/Competition/Logo/L1.svg?h=414&la=fr-FR&w=300&hash=783C68CC46CCFE1978298241C6AF705B',
    large_url:
      'https://www.ligue1.fr/-/media/Project/LFP/shared/Images/Competition/Logo/L1.svg?h=414&la=fr-FR&w=300&hash=783C68CC46CCFE1978298241C6AF705B',
    medium_url:
      'https://www.ligue1.fr/-/media/Project/LFP/shared/Images/Competition/Logo/L1.svg?h=414&la=fr-FR&w=300&hash=783C68CC46CCFE1978298241C6AF705B',
    small_url:
      'https://www.ligue1.fr/-/media/Project/LFP/shared/Images/Competition/Logo/L1.svg?h=414&la=fr-FR&w=300&hash=783C68CC46CCFE1978298241C6AF705B',
    thumbnail_url:
      'https://www.ligue1.fr/-/media/Project/LFP/shared/Images/Competition/Logo/L1.svg?h=414&la=fr-FR&w=300&hash=783C68CC46CCFE1978298241C6AF705B',
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
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
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
