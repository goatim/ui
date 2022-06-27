import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@fridaygame/client';
import WalletThumbnail, {
  WalletThumbnailSize,
  WalletThumbnailInfos,
  WalletThumbnailTheme,
} from '../../../src/market/wallets/walletThumbnail';

interface Props {
  size?: WalletThumbnailSize;
  infos?: WalletThumbnailInfos;
  theme?: WalletThumbnailTheme;
  is_defined?: boolean;
  position?: number;
  amount?: number;
  variation?: number;
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
    infos: {
      control: {
        options: ['picture', 'picture-and-name'],
        type: 'select',
      },
    },
    theme: {
      control: {
        options: ['default', 'light'],
        type: 'select',
      },
    },
    is_defined: {
      control: {
        type: 'boolean',
      },
    },
    position: {
      control: {
        type: 'number',
      },
    },
    amount: {
      control: {
        type: 'number',
      },
    },
    variation: {
      control: {
        type: 'number',
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
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  size,
  theme,
  infos,
  is_defined,
  position,
  amount,
  variation,
}: Props) => (
  <WalletThumbnail
    wallet={{ ...wallet, picture: is_defined ? wallet.picture : undefined }}
    size={size}
    theme={theme}
    infos={infos}
    position={position}
    amount={amount}
    variation={variation}
  />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  infos: 'picture',
  theme: 'default',
};
