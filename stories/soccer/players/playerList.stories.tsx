import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, Player } from '@goatim/client';
import { PlayerList } from '../../../src';

interface Props {
  length?: number;
}

export default {
  title: 'Soccer/PlayerList',
  component: PlayerList,
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

const player: Player = {
  id: '1',
  club,
  first_name: 'Kylian',
  last_name: 'Mbappé',
  number: 10,
  position: 'forward',
  side: 'left',
  resolved_position: 'Attaquant centre',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ length }: Props) => (
  <PlayerList players={Array(length).fill(player)} playerOnClick={() => undefined} />
);

export const Default = Template.bind({});

Default.args = {
  length: 8,
};
