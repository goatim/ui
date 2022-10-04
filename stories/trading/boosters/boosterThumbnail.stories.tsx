import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import BoosterThumbnail, {
  Booster,
  BoosterThumbnailTheme,
} from '../../../src/trading/boosters/boosterThumbnail';
// import { Booster } from '@fridaygame/client';

interface Props {
  isPopular: boolean;
  theme: BoosterThumbnailTheme;
}

export default {
  title: 'Trading/BoosterThumbnail',
  component: BoosterThumbnail,
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

const booster: Booster = {
  multiplier: 5,
  price: 199,
  type: 'gold',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ isPopular, theme }: Props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <BoosterThumbnail
      booster={booster}
      isPopular={isPopular}
      onBuy={() => console.log('onBuy')}
      theme={theme}
    />
  </div>
);

export const Default = Template.bind({});
