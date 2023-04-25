import { Image } from '@goatim/client/dist/medias/image';
import {
  WalletPicture,
  WalletPictureOutline,
  WalletPictureSize,
  WalletPictureTheme,
} from '../../../src';

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
};

const picture: Image = {
  id: 'me_dehHH',
  thumbnail_url: 'https://picsum.photos/200',
};

function Template({ size, theme, outline }: Props) {
  return <WalletPicture picture={picture} size={size} theme={theme} outline={outline} />;
}

export const Default = Template.bind({});
