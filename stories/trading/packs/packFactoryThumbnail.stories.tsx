import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import PackFactoryThumbnail, {
  PackFactory,
  PackFactoryThumbnailTheme,
} from '../../../src/trading/packs/packFactoryThumbnail';
// import { PackFactory } from '@fridaygame/client';

interface Props {
  isPopular: boolean;
  theme: PackFactoryThumbnailTheme;
}

export default {
  title: 'Trading/PackFactoryThumbnail',
  component: PackFactoryThumbnail,
  argTypes: {
    isPopular: {
      options: [true, false],
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['light', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const packFactory: PackFactory = {
  creditAmount: 500000,
  price: 399,
  type: 'gold',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ isPopular, theme }: Props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <PackFactoryThumbnail
      packFactory={packFactory}
      isPopular={isPopular}
      onBuy={() => console.log('onBuy')}
      theme={theme}
    />
  </div>
);

export const Default = Template.bind({});
