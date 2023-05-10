import { StoryFn } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@goatim/client';
import { WalletThumbnail, WalletThumbnailProps } from '../../../src';

export default {
  title: 'Market/WalletThumbnail',
  component: WalletThumbnail,
  argTypes: {
    size: {
      control: {
        options: ['small', 'medium', 'big', 'large'],
        type: 'select',
        defaultValue: 'small',
      },
    },
    shape: {
      control: {
        options: ['inline', 'logo'],
        type: 'select',
        defaultValue: 'inline',
      },
    },
    showPicture: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
    showName: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
    pictureOutline: {
      control: {
        options: ['none', 'outline-gold', 'light-blue'],
        type: 'select',
      },
    },
    showCoins: {
      control: {
        type: 'boolean',
        defaultValue: false,
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
        defaultValue: true,
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

const Template: StoryFn<JSXElementConstructor<WalletThumbnailProps>> = ({
  size,
  theme,
  shape,
  showPicture,
  pictureOutline,
  showName,
  showCoins,
}: WalletThumbnailProps) => (
  <WalletThumbnail
    wallet={wallet}
    size={size}
    theme={theme}
    shape={shape}
    showPicture={showPicture}
    pictureOutline={pictureOutline}
    showName={showName}
    showCoins={showCoins}
  />
);

export const Default = Template.bind({});
