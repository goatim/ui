import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Image } from '@fridaygame/client/dist/medias/image';
import WalletPicture, {
  WalletPictureSize,
  WalletPictureTheme,
  WalletPictureOutline,
} from '../../../src/market/wallets/walletPicture';

interface Props {
  size?: WalletPictureSize;
  theme?: WalletPictureTheme;
  outline?: WalletPictureOutline;
}

export default {
  title: 'Market/WalletPicture',
  component: WalletPicture,
  argTypes: {
    size: {
      control: {
        options: ['small', 'medium', 'big', 'large'],
        type: 'select',
        defaultValue: 'small',
      },
    },
    theme: {
      control: {
        options: ['dark', 'light'],
        type: 'select',
        defaultValue: 'small',
      },
    },
    outline: {
      control: {
        options: ['none', 'outline-gold', 'light-blue'],
        type: 'select',
        defaultValue: 'small',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const picture: Image = {
  id: 'me_dehHH',
  thumbnail_url: 'https://picsum.photos/200',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  size,
  theme,
  outline,
}: Props) => <WalletPicture picture={picture} size={size} theme={theme} outline={outline} />;

export const Default = Template.bind({});
