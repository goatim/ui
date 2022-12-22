import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { PackFactory } from '@fridaygame/client';
import PackFactoryThumbnail from '../../../src/trading/packs/packFactoryThumbnail';

interface Props {}

export default {
  title: 'Trading/PackFactoryThumbnail',
  component: PackFactoryThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const packFactory: PackFactory = {
  id: 'silver',
  name: 'Silver',
  description: 'De pur produit du centre de formation de Friday.',
  price: 399,
  odds: { '100000': 1 },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <PackFactoryThumbnail packFactory={packFactory} />
);

export const Default = Template.bind({});
