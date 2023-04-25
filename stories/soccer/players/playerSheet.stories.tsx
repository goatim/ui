import { StoryFn } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, Player } from '@goatim/client';
import { PlayerSheet, PlayerSheetProps } from '../../../src';

export default {
  title: 'Soccer/PlayerSheet',
  component: PlayerSheet,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'big'],
    },
  },
};

const club: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  primary_color: '#004170',
  secondary_color: '#DA291C',
  description: '',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1024px-Paris_Saint-Germain_Logo.svg.png?20200407190142',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const player: Player = {
  id: '1',
  club,
  first_name: 'Kylian',
  last_name: 'Mbappé',
  number: 10,
  position: 'forward',
  side: 'center',
  resolved_position: 'Attaquant centre',
  resolved_short_position: 'ATT',
  performance_index: 0.98,
  tenure_rate: 0.5,
  description:
    "Vainqueur du championnat de France en 2017 avec l'AS Monaco, il est transféré au Paris Saint-Germain le 31 août 2017. Le soir même, il marque son premier but en équipe de France.\n" +
    '\n' +
    "Fin 2018, il remporte le trophée Kopa du meilleur joueur mondial de l'année de moins de 21 ans. Le 11 juin 2019, il est le plus jeune joueur à inscrire 100 buts en professionnel, à 20 ans et 5 mois, et également en 2021, à 22 ans et 291 jours, à atteindre les 50 sélections avec le maillot Bleu. Le 13 novembre 2021, lors du match qui donne la qualification aux Bleus pour la Coupe du monde 2022 face au Kazakhstan (8-0), il inscrit le premier quadruplé d'un joueur français en compétition depuis Just Fontaine, lors de la Coupe du monde 1958.",
};

const Template: StoryFn<JSXElementConstructor<PlayerSheetProps>> = ({ size }: PlayerSheetProps) => (
  <PlayerSheet player={player} size={size} />
);

export const Default = Template.bind({});
