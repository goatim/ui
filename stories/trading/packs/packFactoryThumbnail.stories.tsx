import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { PackFactory } from '@fridaygame/client';
import PackFactoryThumbnail, {
  PackFactoryThumbnailTheme,
} from '../../../src/trading/packs/packFactoryThumbnail';

interface Props {
  theme: PackFactoryThumbnailTheme;
}

export default {
  title: 'Trading/PackFactoryThumbnail',
  component: PackFactoryThumbnail,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <PackFactoryThumbnail packFactory={packFactory} theme={theme} />
  </div>
);

export const Default = Template.bind({});
