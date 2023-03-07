import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@goatim/client';
import { WalletRank, WalletThumbnailSize, WalletThumbnailTheme } from '../../../src';

interface Props {
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
  showPicture?: boolean;
  showName?: boolean;
  showAmount?: boolean;
  is_defined?: boolean;
}

export default {
  title: 'Market/WalletRank',
  component: WalletRank,
  argTypes: {
    size: {
      control: {
        options: ['small', 'medium', 'big'],
        type: 'select',
      },
    },
    showPicture: {
      control: {
        type: 'boolean',
      },
    },
    showName: {
      control: {
        type: 'boolean',
      },
    },
    showAmount: {
      control: {
        type: 'boolean',
      },
    },
    theme: {
      control: {
        options: ['dark', 'light'],
        type: 'select',
      },
    },
    is_defined: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const owner: User = {
  id: 'us_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  pseudo: 'Player 1',
  first_name: 'Lucien',
  last_name: 'Perouze',
};

const wallet: Wallet = {
  id: 'wa_sopsaA',
  owner,
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Smart Monkey',
  amount: 40000000,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  size,
  theme,
  showPicture,
  showName,
  showAmount,
  is_defined,
}: Props) => (
  <WalletRank
    wallet={{ ...wallet, picture: is_defined ? wallet.picture : undefined }}
    size={size}
    theme={theme}
    showPicture={showPicture}
    showName={showName}
    showAmount={showAmount}
    position={4}
    amount={4000}
    variation={2000}
  />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  showPicture: true,
  showName: true,
  showAmount: false,
  theme: 'dark',
};
