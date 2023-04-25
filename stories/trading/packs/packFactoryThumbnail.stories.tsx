import { PackFactory } from '@goatim/client';
import { PackFactoryThumbnail } from '../../../src';

export default {
  title: 'Trading/PackFactoryThumbnail',
  component: PackFactoryThumbnail,
  argTypes: {},
};

const packFactory: PackFactory = {
  id: 'silver',
  name: 'Silver',
  description: 'De pur produit du centre de formation de Goatim.',
  price: 399,
  odds: { '100000': 1 },
};

function Template() {
  return <PackFactoryThumbnail packFactory={packFactory} />;
}

export const Default = Template.bind({});
