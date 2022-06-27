import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { League } from '@fridaygame/client';
import LeagueThumbnail, {
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
} from '../../../src/soccer/leagues/leagueThumbnail';

interface Props {
  size?: LeagueThumbnailSize;
  theme?: LeagueThumbnailTheme;
}

export default {
  title: 'Soccer/LeagueThumbnail',
  component: LeagueThumbnail,
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, theme }: Props) => (
  <LeagueThumbnail league={league} size={size} theme={theme} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  theme: 'default',
};
