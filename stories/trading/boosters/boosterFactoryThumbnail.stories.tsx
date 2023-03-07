import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
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
      options: ['icon', 'card'],
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
} as ComponentMeta<JSXElementConstructor<Props>>;

const boosterFactory: BoosterFactory = {
  id: 'bo_ied5',
  name: 'Pavaaard !',
  slug: 'pavaaard',
  price: 2000,
  leverage: 2,
  description: 'Dégommes tes adversaires !',
  nb_in_wallet: 10,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, shape, active }: Props) => (
  <BoosterFactoryThumbnail
    boosterFactory={boosterFactory}
    size={size}
    shape={shape}
    active={active}
  />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  shape: 'card',
  active: false,
};
