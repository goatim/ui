import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import OnboardingCarousel, {
  OnboardingCarouselSize,
  OnboardingCarouselSlideData,
} from '../../src/onboarding/onboardingCarousel';
import onboarding1 from './assets/onboarding1.jpg';
import onboarding2 from './assets/onboarding2.jpg';
import onboarding3 from './assets/onboarding3.jpg';
import onboarding4 from './assets/onboarding4.jpg';

interface Props {
  size?: OnboardingCarouselSize;
}

export default {
  title: 'Onboarding/OnboardingCarousel',
  component: OnboardingCarousel,
  argTypes: {
    size: {
      options: ['narrow', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const slides: OnboardingCarouselSlideData[] = [
  {
    description:
      'Bienvenue sur Friday la première plateforme de trading de joueurs de football professionnels !',
    image: onboarding1,
    title: `Bienvenue John`,
  },
  {
    description:
      "A la suite de ton inscription, tu as reçu ton Starter Pack composé de FridayCoins et d'actions de joueurs. Désormais, tu vas pouvoir acheter et vendre des actions de joueurs de football professionnels.",
    image: onboarding2,
    title: 'Achète et vends',
  },
  {
    description:
      'Avant chaque week-end, compose ton équipe avec les joueurs que tu possèdes. Tous les lundis, tu percevras tes dividendes de provenant de ton équipe. Ils sont calculés en fonction des performances sportives réels des joueurs. Attention, ils peuvent être positifs comme négatifs alors choisis bien !',
    image: onboarding3,
    title: 'Compose ton équipe',
  },
  {
    description:
      "Grâce à tes performances de trader, tu pourras convertir tes FridayCoins en Ether. Rien de plus simple, crée toi un Wallet d'Ether (ex : Coinbase Wallet), puis sur le site Friday, clique sur le bouton de conversion, entre l'adresse de ton Wallet et confirme. Le tour est joué, tu recevras tes Ethers dès que notre support aura validé la transaction.",
    image: onboarding4,
    title: 'Convertis tes FridayCoins en Ether',
  },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size }: Props) => (
  <div
    style={{
      padding: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <OnboardingCarousel slides={slides} size={size} />
  </div>
);

export const Default = Template.bind({});
