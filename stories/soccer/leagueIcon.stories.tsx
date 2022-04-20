import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Image } from '@cezembre/fronts';
import LeagueIcon, { LeagueIconSize } from '../../src/soccer/leagueIcon';

interface Props {
  size?: LeagueIconSize;
  defined?: boolean;
}

export default {
  title: 'Soccer/LeagueIcon',
  component: LeagueIcon,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    defined: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const icon: Image = {
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
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, defined }: Props) => (
  <LeagueIcon icon={defined ? icon : undefined} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  defined: true,
};
