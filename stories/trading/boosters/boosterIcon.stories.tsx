import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import BoosterIcon, { BoosterIconSize } from '../../../src/trading/boosters/boosterIcon';

interface Props {
  size?: BoosterIconSize;
  active?: boolean;
}

export default {
  title: 'Trading/BoosterIcon',
  component: BoosterIcon,
  argTypes: {
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, active }: Props) => (
  <BoosterIcon leverage={5} size={size} active={active} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  active: false,
};
