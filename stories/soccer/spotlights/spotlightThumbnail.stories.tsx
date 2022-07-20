import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Spotlight, Player, SpotlightType } from '@fridaygame/client';
import SpotlightThumbnail from '../../../src/soccer/spotlights/spotlightThumbnail';

interface Props {
  type?: SpotlightType;
}

export default {
  title: 'Soccer/SpotlightThumbnail',
  component: SpotlightThumbnail,
  argTypes: {
    type: {
      options: ['simple', 'duo'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const club: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  description: '',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const player: Player = {
  id: '1',
  club,
  name: 'Kylian Mbappé',
  number: 10,
  position: 'attacking_midfield',
  side: 'left',
  textual_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  name: 'Kylian Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  session_variation: 345,
  player,
};

const spotlight: Spotlight = {
  id: 'sp_qedfz489',
  subtitle: 'Les joueurs',
  title: "Ici c'est Paris !",
  resolved_primary_color: '#063E6F',
  resolved_secondary_color: '#ff1541',
  resolved_primary_assets: [asset, asset, asset],
  resolved_illustration: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ type }: Props) => (
  <SpotlightThumbnail spotlight={{ ...spotlight, type }} />
);

export const Default = Template.bind({});
