import { Composition } from '@goatim/client';
import { CompositionPodium } from '../../../src/soccer';

export default {
  title: 'Soccer/CompositionPodium',
  component: CompositionPodium,
  argTypes: {
    status: {
      options: ['created', 'open', 'ongoing', 'passed', 'closing', 'closed', 'cancelled'],
      control: {
        type: 'select',
      },
    },
  },
};

const composition1: Composition = {
  id: 'co_qkuehd456',
  status: 'valid',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?a=a',
    },
    name: 'Leo',
    coins: 40000000,
  },
  position: 1,
  variation: 1.23,
  gains: 45000,
  score: 1230,
};

const composition2: Composition = {
  id: 'co_qkqzdqzd56',
  status: 'valid',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?b=b',
    },
    name: 'Thibz',
    coins: 40000000,
  },
  position: 2,
  variation: 1.02,
  gains: 41000,
  score: 1100,
};

const composition3: Composition = {
  id: 'co_qefahd456',
  status: 'valid',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?c=c',
    },
    name: 'Anastasia',
    coins: 40000000,
  },
  position: 3,
  variation: 0.95,
  gains: 25000,
  score: 950,
};

function Template() {
  return <CompositionPodium compositions={[composition1, composition2, composition3]} />;
}

export const Default = Template.bind({});
