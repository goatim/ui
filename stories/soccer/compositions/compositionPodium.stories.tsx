import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Composition } from '@fridaygame/client';
import { CompositionPodium } from '../../../src';

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
} as ComponentMeta<JSXElementConstructor<unknown>>;

const composition1: Composition = {
  id: 'co_qkuehd456',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?a=a',
    },
    name: 'Leo',
    amount: 40000000,
  },
  position: 1,
  dividends_percentage: 1.23,
  dividends_gains: 45000,
  score: 1230,
};

const composition2: Composition = {
  id: 'co_qkqzdqzd56',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?b=b',
    },
    name: 'Thibz',
    amount: 40000000,
  },
  position: 2,
  dividends_percentage: 1.02,
  dividends_gains: 41000,
  score: 1100,
};

const composition3: Composition = {
  id: 'co_qefahd456',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?c=c',
    },
    name: 'Anastasia',
    amount: 40000000,
  },
  position: 3,
  dividends_percentage: 0.95,
  dividends_gains: 25000,
  score: 950,
};

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <CompositionPodium compositions={[composition1, composition2, composition3]} />
);

export const Default = Template.bind({});

Default.args = {};
