import { OnboardingCarousel, OnboardingCarouselSlideData } from '../../src';

export default {
  title: 'Onboarding/OnboardingCarousel',
  component: OnboardingCarousel,
};

const slides: OnboardingCarouselSlideData[] = [
  {
    description:
      'Bienvenue sur Goatim la première plateforme de trading de joueurs de football professionnels !',
    // image: onboarding1,
    title: 'Participe aux matchs !',
  },
  // {
  //   description:
  //     "A la suite de ton inscription, tu as reçu ton Starter Pack composé de GoatimCoins et d'actions de joueurs. Désormais, tu vas pouvoir acheter et vendre des actions de joueurs de football professionnels.",
  //   image: onboarding2,
  //   title: 'Achète et vends',
  // },
  // {
  //   description:
  //     'Avant chaque week-end, compose ton équipe avec les joueurs que tu possèdes. Tous les lundis, tu percevras tes dividendes de provenant de ton équipe. Ils sont calculés en fonction des performances sportives réels des joueurs. Attention, ils peuvent être positifs comme négatifs alors choisis bien !',
  //   image: onboarding3,
  //   title: 'Compose ton équipe',
  // },
  // {
  //   description:
  //     "Grâce à tes performances de trader, tu pourras convertir tes GoatimCoins en Ether. Rien de plus simple, crée toi un Wallet d'Ether (ex : Coinbase Wallet), puis sur le site Goatim, clique sur le bouton de conversion, entre l'adresse de ton Wallet et confirme. Le tour est joué, tu recevras tes Ethers dès que notre support aura validé la transaction.",
  //   image: onboarding4,
  //   title: 'Convertis tes GoatimCoins en Ether',
  // },
];

function Template() {
  return <OnboardingCarousel dismissModal={() => undefined} slides={slides} />;
}

export const Default = Template.bind({});
