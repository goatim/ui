import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User, Wallet } from '@fridaygame/client';
import WalletThumbnail, {
  WalletThumbnailSize,
  WalletThumbnailInfos,
} from '../../src/market/walletThumbnail';

interface Props {
  size?: WalletThumbnailSize;
  infos?: WalletThumbnailInfos;
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
    infos: {
      control: {
        options: ['picture', 'picture-and-name'],
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
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  size,
  infos,
  is_defined,
}: Props) => (
  <WalletThumbnail
    wallet={{ ...wallet, picture: is_defined ? wallet.picture : undefined }}
    size={size}
    infos={infos}
  />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  infos: 'picture',
};
