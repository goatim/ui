import { Subscription, SubscriptionThumbnail, SubscriptionThumbnailTheme } from '../../src';

// import { Subscription } from '@goatim/client';

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
};

const subscription: Subscription = {
  monthlyPrice: 1499,
  type: 'gold',
};

const bonusesDescriptions = [
  "Reçois 2 packs actions / mois d'une valeur de 500 GTC",
  'Reçois 2 boosters / mois',
  "Bénéficie d'un accès privilégié aux pré-ventes des nouveaux joueurs",
];

function Template({ isPopular, theme }: Props) {
  return (
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
}

export const Default = Template.bind({});
