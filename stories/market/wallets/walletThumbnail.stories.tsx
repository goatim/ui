import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@fridaygame/client';
import WalletThumbnail, {
  WalletThumbnailSize,
  WalletThumbnailTheme,
} from '../../../src/market/wallets/walletThumbnail';
import { WalletPictureOutline } from '../../../src/market/wallets/walletPicture';

interface Props {
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
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
    pictureOutline: {
      control: {
        options: ['outline-gold'],
        type: 'select',
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
  pictureOutline,
  showName,
  showAmount,
  is_defined,
}: Props) => (
  <WalletThumbnail
    wallet={{ ...wallet, picture: is_defined ? wallet.picture : undefined }}
    size={size}
    theme={theme}
    showPicture={showPicture}
    pictureOutline={pictureOutline}
    showName={showName}
    showAmount={showAmount}
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
