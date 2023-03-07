import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@goatim/client';
import {
  WalletPictureOutline,
  WalletThumbnail,
  WalletThumbnailShape,
  WalletThumbnailSize,
  WalletThumbnailTheme,
} from '../../../src';

interface Props {
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
  shape?: WalletThumbnailShape;
  showPicture?: boolean;
  pictureOutline?: WalletPictureOutline;
  showName?: boolean;
  showAmount?: boolean;
  is_defined?: boolean;
}

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
    showAmount: {
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
  shape,
  showPicture,
  pictureOutline,
  showName,
  showAmount,
  is_defined,
}: Props) => (
  <WalletThumbnail
    wallet={{ ...wallet, picture: is_defined ? wallet.picture : undefined }}
    size={size}
    theme={theme}
    shape={shape}
    showPicture={showPicture}
    pictureOutline={pictureOutline}
    showName={showName}
    showAmount={showAmount}
  />
);

export const Default = Template.bind({});
