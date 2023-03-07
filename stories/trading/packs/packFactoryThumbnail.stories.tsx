import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { PackFactory } from '@goatim/client';
import { PackFactoryThumbnail } from '../../../src';

interface Props {}

export default {
  title: 'Trading/PackFactoryThumbnail',
  component: PackFactoryThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const packFactory: PackFactory = {
  id: 'silver',
  name: 'Silver',
  description: 'De pur produit du centre de formation de Goatim.',
  price: 399,
  odds: { '100000': 1 },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <PackFactoryThumbnail packFactory={packFactory} />
);

export const Default = Template.bind({});
