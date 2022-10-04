import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import SubscriptionThumbnail, {
  Subscription,
  SubscriptionThumbnailTheme,
} from '../../src/subscriptions/subscriptionThumbnail';
// import { Subscription } from '@fridaygame/client';

interface Props {
  isPopular: boolean;
  theme: SubscriptionThumbnailTheme;
}

export default {
  title: 'Subscriptions/SubscriptionThumbnail',
  component: SubscriptionThumbnail,
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

const subscription: Subscription = {
  monthlyPrice: 1499,
  type: 'gold',
};

const bonusesDescriptions = [
  "Reçois 2 packs actions / mois d'une valeur de 500 FDY",
  'Reçois 2 boosters / mois',
  "Bénéficie d'un accès privilégié aux pré-ventes des nouveaux joueurs",
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ isPopular, theme }: Props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <SubscriptionThumbnail
      bonusesDescriptions={bonusesDescriptions}
      subscription={subscription}
      isPopular={isPopular}
      onBuy={() => console.log('onBuy')}
      theme={theme}
    />
  </div>
);

export const Default = Template.bind({});
