import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { PackFactory } from '@fridaygame/client';
import PackFactoryCarousel, {
  PackFactoryCarouselSize,
} from '../../../src/trading/packs/packFactoryCarousel';

interface Props {
  size?: PackFactoryCarouselSize;
}

export default {
  title: 'Trading/PackFactoryCarousel',
  component: PackFactoryCarousel,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const packFactory: PackFactory = {
  id: 'silver',
  name: 'Silver',
  description: 'De pur produit du centre de formation de Friday.',
  price: 399,
  odds: { '100000': 1 },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size }: Props) => (
  <PackFactoryCarousel packFactories={[packFactory, packFactory, packFactory]} size={size} />
);

export const Default = Template.bind({});