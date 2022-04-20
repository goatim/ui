import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { BoosterInUse } from '@fridaygame/client';
import BoosterInUseStack from '../../src/trading/boosterInUseStack';

interface Props {}

export default {
  title: 'Trading/BoosterInUseStack',
  component: BoosterInUseStack,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const activeBoosterInUse: BoosterInUse = {
  id: 'bi_dqqzjkoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 2,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: 42000,
  variation: 3200,
};

const inactiveBoosterInUse1: BoosterInUse = {
  id: 'bi_dqqzskoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 2,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: -2000,
  variation: -120,
  stopped_at: '2021-11-04 14:07:26.679000 +00:00',
};

const inactiveBoosterInUse2: BoosterInUse = {
  id: 'bi_dqqzdqzdskoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 10,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: 98000,
  variation: 3200,
  stopped_at: '2021-11-04 14:07:26.679000 +00:00',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <BoosterInUseStack
    boostersInUse={[activeBoosterInUse, inactiveBoosterInUse1, inactiveBoosterInUse2]}
    onStopBooster={() => undefined}
  />
);

export const Default = Template.bind({});

Default.args = {};
