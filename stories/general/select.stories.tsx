import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import { Club, Player } from '@fridaygame/client';
import Select, { SelectType } from '../../src/general/select';
import { PlayerThumbnail } from '../../src';

interface Props {
  label?: string;
  type?: SelectType;
}

export default {
  title: 'General/Select',
  component: Select,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    type: {
      options: ['default', 'flat'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [(story) => <Form>{story()}</Form>],
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

const players: Player[] = [
  {
    id: 'pl_ygqzd648',
    club,
    name: 'Kylian Mbappé',
    number: 10,
    position: 'attacking_midfield',
    side: 'left',
    textual_position: 'Attaquant centre',
  },
  {
    id: 'pl_qefs54',
    club,
    name: 'Lionel Messi',
    number: 10,
    position: 'attacking_midfield',
    side: 'left',
    textual_position: 'Attaquant centre',
  },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label, type }: Props) => (
  <Field
    name="select"
    component={Select}
    type="flat"
    label={label}
    canCancel
    options={players.map((player: Player) => ({
      value: player.id,
      element: <PlayerThumbnail player={player} />,
    }))}
  />
);

export const Default = Template.bind({});

Default.args = {
  type: 'default',
};
