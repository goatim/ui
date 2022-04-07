import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Booster } from '@fridaygame/client';
import BoosterIcon, { BoosterIconInfos, BoosterIconSize } from '../src/trading/boosterIcon';

interface Props {
  infos?: BoosterIconInfos;
  size?: BoosterIconSize;
  active?: boolean;
}

export default {
  title: 'Trading/BoosterIcon',
  component: BoosterIcon,
  argTypes: {
    infos: {
      options: ['stock', 'price', 'stock_or_price', 'none'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'medium', 'big'],
      control: {
        type: 'select',
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const booster: Booster = {
  id: 'bo_ied5',
  name: 'Pavaaard !',
  slug: 'pavaaard',
  price: 200,
  leverage: 2,
  nb_in_wallet: 10,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ infos, size, active }: Props) => (
  <BoosterIcon booster={booster} infos={infos} size={size} active={active} />
);

export const Default = Template.bind({});

Default.args = {
  infos: 'stock_or_price',
  size: 'small',
  active: false,
};
