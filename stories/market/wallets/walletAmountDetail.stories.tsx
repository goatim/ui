import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Wallet } from '@fridaygame/client';
import {
  WalletAmountDetail,
  WalletAmountDetailSize,
} from '../../../src';

interface Props {
  size?: WalletAmountDetailSize;
}

export default {
  title: 'Market/WalletAmountDetail',
  component: WalletAmountDetail,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['narrow', 'normal'],
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const wallet: Wallet = {
  id: 'wa_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Smart Monkey',
  amount: 420000,
  portfolios_quotation: 785200,
  portfolios_session_variation: 45,
  floor_withdrawal: 150000,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size }: Props) => (
  <WalletAmountDetail wallet={wallet} size={size} />
);

export const Default = Template.bind({});
