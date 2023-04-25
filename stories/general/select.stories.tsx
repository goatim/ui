import { Field, Form } from '@cezembre/forms';
import { useCallback, useEffect, useState } from 'react';
import { Club, Player } from '@goatim/client';
import { PlayerThumbnail, Select, SelectOption, SelectType } from '../../src';

interface Props {
  label?: string;
  selectType?: SelectType;
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
    selectType: {
      options: ['dark', 'flat'],
      control: {
        type: 'select',
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

const allPlayers: Player[] = [
  {
    id: 'pl_ygqzd648',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qgypp54',
    club,
    first_name: 'Lionel',
    last_name: 'Messi',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qesfggy54',
    club,
    first_name: 'Lionel',
    last_name: 'Messi',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qeqzd4',
    club,
    first_name: 'Lionel',
    last_name: 'Messi',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qrgs54',
    club,
    first_name: 'Lionel',
    last_name: 'Messi',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qeflzs54',
    club,
    first_name: 'Lionel',
    last_name: 'Messi',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
];

const filteredPlayers: Player[] = [
  {
    id: 'pl_ygqzd648',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qgypp54',
    club,
    first_name: 'Lionel',
    last_name: 'Messi',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
];

function Template({ label, selectType }: Props) {
  const [options, setOptions] = useState<SelectOption<string>[]>([]);

  useEffect(() => {
    setOptions(
      allPlayers.map((player: Player) => ({
        value: player.id,
        element: <PlayerThumbnail player={player} />,
      })),
    );
  }, []);

  const onSearch = useCallback((search: string) => {
    if (search) {
      setOptions(
        filteredPlayers.map((player: Player) => ({
          value: player.id,
          element: <PlayerThumbnail player={player} />,
        })),
      );
    } else {
      setOptions(
        allPlayers.map((player: Player) => ({
          value: player.id,
          element: <PlayerThumbnail player={player} />,
        })),
      );
    }
  }, []);

  return (
    <Form>
      <Field
        name="test"
        component={Select}
        type={selectType}
        label={label}
        canCancel
        options={options}
        onSearch={onSearch}
      />
    </Form>
  );
}

export const Default = Template.bind({});
