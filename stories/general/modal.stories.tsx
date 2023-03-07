import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor, useCallback } from 'react';
import {
  ModalsContext,
  OnboardingCarousel,
  OnboardingCarouselSlideData,
  useModals,
} from '../../src';
import onboarding1 from '../onboarding/assets/onboarding1.jpg';
import onboarding2 from '../onboarding/assets/onboarding2.jpg';
import onboarding3 from '../onboarding/assets/onboarding3.jpg';
import onboarding4 from '../onboarding/assets/onboarding4.jpg';

const slides: OnboardingCarouselSlideData[] = [
  {
    description:
      'Bienvenue sur Goatim la première plateforme de trading de joueurs de football professionnels !',
    image: onboarding1,
    title: `Bienvenue John`,
  },
  {
    description:
      "A la suite de ton inscription, tu as reçu ton Starter Pack composé de GoatimCoins et d'actions de joueurs. Désormais, tu vas pouvoir acheter et vendre des actions de joueurs de football professionnels.",
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
      "Grâce à tes performances de trader, tu pourras convertir tes GoatimCoins en Ether. Rien de plus simple, crée toi un Wallet d'Ether (ex : Coinbase Wallet), puis sur le site Goatim, clique sur le bouton de conversion, entre l'adresse de ton Wallet et confirme. Le tour est joué, tu recevras tes Ethers dès que notre support aura validé la transaction.",
    image: onboarding4,
    title: 'Convertis tes GoatimCoins en Ether',
  },
];

// const pack: Pack = {};

function App() {
  const { pushModal } = useModals();
  const openModal = useCallback(() => {
    pushModal({
      type: 'overlay',
      component: OnboardingCarousel,
      props: { slides },
      // component: () => <PackModal pack={pack} />,
    });
  }, [pushModal]);

  return (
    <div>
      {Array(10).fill(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid aut error esse,
          et hic illo illum molestias, natus nemo quasi qui quisquam ratione saepe sequi soluta
          tenetur voluptates!
        </p>,
      )}
      <button onClick={openModal}>Open modal</button>
      {Array(10).fill(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid aut error esse,
          et hic illo illum molestias, natus nemo quasi qui quisquam ratione saepe sequi soluta
          tenetur voluptates!
        </p>,
      )}
    </div>
  );
}

export default {
  title: 'General/Modal',
  component: App,
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <ModalsContext>
    <App />
  </ModalsContext>
);

export const Default = Template.bind({});
