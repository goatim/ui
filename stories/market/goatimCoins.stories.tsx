import { StoryFn } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { GoatimCoins, GoatimCoinsSize, GoatimCoinsTheme } from '../../src';

interface Props {
  coins?: number;
  size?: GoatimCoinsSize;
  theme?: GoatimCoinsTheme;
  decimalDigits?: number;
}

export default {
  title: 'Market/GoatimCoins',
  component: GoatimCoins,
  argTypes: {
    coins: {
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
};

const Template: StoryFn<JSXElementConstructor<Props>> = ({
  coins,
  decimalDigits,
  size,
  theme,
}: Props) => <GoatimCoins coins={coins} decimalDigits={decimalDigits} size={size} theme={theme} />;

export const Default = Template.bind({});

Default.args = {
  coins: 50,
  size: 'small',
  theme: 'dark',
};
