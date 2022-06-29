import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Image } from '@fridaygame/client';
import LeagueIcon, { LeagueIconSize } from '../../../src/soccer/leagues/leagueIcon';

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
  url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
  large_url:
    'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
  medium_url:
    'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
  small_url:
    'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
  thumbnail_url:
    'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, defined }: Props) => (
  <LeagueIcon icon={defined ? icon : undefined} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  defined: true,
};