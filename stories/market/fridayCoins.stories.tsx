import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { FridayCoins, FridayCoinsSize, FridayCoinsTheme } from '../../src';

interface Props {
  amount?: number;
  size?: FridayCoinsSize;
  theme?: FridayCoinsTheme;
  decimalDigits?: number;
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
    decimalDigits: {
      control: {
        options: [0, 1, 2, 3],
        type: 'select',
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
        options: ['dark', 'light', 'discreet', 'gold'],
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  amount,
  decimalDigits,
  size,
  theme,
}: Props) => (
  <FridayCoins amount={amount} decimalDigits={decimalDigits} size={size} theme={theme} />
);

export const Default = Template.bind({});

Default.args = {
  amount: 50,
  size: 'small',
  theme: 'dark',
};
