import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Booster } from '@goatim/client';
import { BoosterStack } from '../../../src';

export default {
  title: 'Trading/BoosterStack',
  component: BoosterStack,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<unknown>>;

const activeBooster: Booster = {
  id: 'bi_dqqzjkoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 2,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: 42000,
  variation: 3200,
};

const inactiveBooster1: Booster = {
  id: 'bi_dqqzskoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 2,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: -2000,
  variation: -120,
  stopped_at: '2021-11-04 14:07:26.679000 +00:00',
};

const inactiveBooster2: Booster = {
  id: 'bi_dqqzdqzdskoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 10,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: 98000,
  variation: 3200,
  stopped_at: '2021-11-04 14:07:26.679000 +00:00',
};

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <BoosterStack
    boosters={[activeBooster, inactiveBooster1, inactiveBooster2]}
    onStopBooster={() => undefined}
  />
);

export const Default = Template.bind({});

Default.args = {};
