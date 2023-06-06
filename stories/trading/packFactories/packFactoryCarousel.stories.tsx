import { PackFactory } from '@goatim/client';
import { PackFactoryCarousel, PackFactoryCarouselProps } from '../../../src';

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
};

const packFactory: PackFactory = {
  id: 'silver',
  name: 'Silver',
  description: 'De pur produit du centre de formation de Goatim.',
  price: 399,
  odds: { '100000': 1 },
};

function Template({ size, theme }: PackFactoryCarouselProps) {
  return (
    <PackFactoryCarousel
      packFactories={[packFactory, packFactory, packFactory]}
      size={size}
      theme={theme}
    />
  );
}

export const Default = Template.bind({});
