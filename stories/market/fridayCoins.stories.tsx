import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import FridayCoins, { FridayCoinsSize, FridayCoinsTheme } from '../../src/market/fridayCoins';

interface Props {
  amount?: number;
  size?: FridayCoinsSize;
  theme?: FridayCoinsTheme;
}

export default {
  title: 'Market/FridayCoins',
  component: FridayCoins,
  argTypes: {
    amount: {
      control: {
        type: 'number',
        step: 100,
      },
    },
    size: {
      control: {
        options: ['small', 'medium', 'big', 'large'],
        type: 'select',
      },
    },
    theme: {
      control: {
        options: ['dark', 'light', 'discreet'],
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ amount, size, theme }: Props) => (
  <FridayCoins amount={amount} size={size} theme={theme} />
);

export const Default = Template.bind({});

Default.args = {
  amount: 50,
  size: 'small',
  theme: 'dark',
};
