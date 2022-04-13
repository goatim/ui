import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club } from '@fridaygame/client';
import ClubsList from '../src/soccer/clubsList';

interface Props {
  length?: number;
}

export default {
  title: 'Soccer/ClubsList',
  component: ClubsList,
  argTypes: {
    length: {
      control: {
        type: 'number',
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ length }: Props) => (
  <ClubsList clubs={Array(length).fill(club)} />
);

export const Default = Template.bind({});

Default.args = {
  length: 8,
};
