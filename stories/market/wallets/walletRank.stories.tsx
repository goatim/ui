import { StoryFn } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@goatim/client';
import { WalletRank, WalletThumbnailSize, WalletThumbnailTheme } from '../../../src';

interface Props {
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
  showPicture?: boolean;
  showName?: boolean;
  showCoins?: boolean;
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
    showCoins: {
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
};

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
  coins: 40000000,
};

const Template: StoryFn<JSXElementConstructor<Props>> = ({
  size,
  theme,
  showPicture,
  showName,
  showCoins,
  is_defined,
}: Props) => (
  <WalletRank
    wallet={{ ...wallet, picture: is_defined ? wallet.picture : undefined }}
    size={size}
    theme={theme}
    showPicture={showPicture}
    showName={showName}
    showCoins={showCoins}
    position={4}
    coins={4000}
  />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  showPicture: true,
  showName: true,
  showCoins: false,
  theme: 'dark',
};
