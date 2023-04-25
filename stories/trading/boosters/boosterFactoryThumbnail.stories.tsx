import { BoosterFactory } from '@goatim/client';
import {
  BoosterFactoryThumbnail,
  BoosterFactoryThumbnailShape,
  BoosterFactoryThumbnailSize,
} from '../../../src';

interface Props {
  size?: BoosterFactoryThumbnailSize;
  shape?: BoosterFactoryThumbnailShape;
  active?: boolean;
}

export default {
  title: 'Trading/BoosterFactoryThumbnail',
  component: BoosterFactoryThumbnail,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big'],
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['list', 'card'],
      control: {
        type: 'select',
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const boosterFactory: BoosterFactory = {
  id: 'bo_ied5',
  name: 'Pavaaard !',
  slug: 'pavaaard',
  price: 2000,
  leverage: 2,
  description: 'Dégommes tes adversaires !',
  nb_in_wallet: 10,
};

function Template({ size, shape, active }: Props) {
  return (
    <BoosterFactoryThumbnail
      boosterFactory={boosterFactory}
      size={size}
      shape={shape}
      active={active}
    />
  );
}

export const Default = Template.bind({});
