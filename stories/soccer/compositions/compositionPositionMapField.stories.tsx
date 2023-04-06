import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field, Form } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import {
  BoosterFactory,
  Club,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
} from '@goatim/client';
import { CompositionPositionMapField, ModalsContext } from '../../../src';

export default {
  title: 'Soccer/CompositionPositionMapField',
  component: CompositionPositionMapField,
  decorators: [(story) => <ModalsContext>{story()}</ModalsContext>],
} as ComponentMeta<JSXElementConstructor<unknown>>;

const compositionSetting: CompositionSetting = {
  id: 'cs_edsefqed',
  name: '4-3-3 Classique',
  positions: [
    {
      id: '0',
      name: 'Gardien',
      x: 0.5,
      y: 1,
    },
    {
      id: '1',
      name: 'Arrière gauche',
      x: 0.15,
      y: 0.75,
    },
    {
      id: '2',
      name: 'Défenseur gauche',
      x: 0.35,
      y: 0.8,
    },
    {
      id: '3',
      name: 'Défenseur droit',
      x: 0.65,
      y: 0.8,
    },
    {
      id: '4',
      name: 'Arrière droit',
      x: 0.85,
      y: 0.75,
    },
    {
      id: '5',
      name: 'Ailier gauche',
      x: 0.25,
      y: 0.48,
    },
    {
      id: '6',
      name: 'Milieu de terrain',
      x: 0.5,
      y: 0.58,
    },
    {
      id: '7',
      name: 'Ailier droit',
      x: 0.75,
      y: 0.48,
    },
    {
      id: '8',
      name: 'Attaquant gauche',
      x: 0.15,
      y: 0.3,
    },
    {
      id: '9',
      name: 'Attaquant centre',
      x: 0.5,
      y: 0.2,
    },
    {
      id: '10',
      name: 'Attaquant droit',
      x: 0.85,
      y: 0.3,
    },
  ],
  is_default: true,
};

const club: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  description: '',
  // icon: {
  //   id: '1',
  //   url: 'https://www.psg.fr/img/logos/psg-logo.png',
  //   large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
  //   medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
  //   small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  //   thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  // },
};

const players: Player[] = [
  {
    id: 'pl_ygq44zd648',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qefs33354',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qe84fs54',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qe524fs54',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qedcwefs54',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qkhikefs54',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qeqzdcfs54',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qefqzds54',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
  {
    id: 'pl_qtfhefs54',
    club,
    first_name: 'Kylian',
    last_name: 'Mbappé',
    number: 10,
    position: 'forward',
    side: 'left',
    resolved_position: 'Attaquant centre',
  },
];

const boosterFactories: BoosterFactory[] = [
  {
    id: 'bf_dsfedqe',
    name: 'Lucarne',
    leverage: 2,
    price: 99,
  },
  {
    id: 'bf_dsqzqzddqe',
    name: 'Panenka',
    leverage: 4,
    price: 199,
  },
  {
    id: 'bf_zszdq6',
    name: 'Pavaaard !',
    leverage: 8,
    price: 299,
  },
];

function getPositionPlayers(position: CompositionSettingPosition): Promise<Player[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(players);
    }, 100);
  });
}

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <div style={{ width: 400 }}>
    <Form>
      <Field
        name="positions"
        component={CompositionPositionMapField}
        compositionSetting={compositionSetting}
        getPositionPlayers={getPositionPlayers}
        boosterFactories={boosterFactories}
      />
    </Form>
  </div>
);

export const Default = Template.bind({});

Default.args = {};
