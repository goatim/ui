import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club } from '@fridaygame/client';
import { ClubCarousel } from '../../../src';

interface Props {
  length?: number;
}

export default {
  title: 'Soccer/ClubCarousel',
  component: ClubCarousel,
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
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

function getClubs(page: number): Club[] {
  return new Array(6).fill({ ...club, name: `Club ${page + 1}` });
}

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ length }: Props) => (
  <ClubCarousel getClubs={getClubs} />
);

export const Default = Template.bind({});

Default.args = {
  length: 8,
};
