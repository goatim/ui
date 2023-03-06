import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor, ReactElement } from 'react';
import { Asset, Club, Player, Spotlight, SpotlightType } from '@fridaygame/client';
import {
  SpotlightThumbnail,
  SpotlightThumbnailSize,
} from '../../../src';

interface Props {
  type?: SpotlightType;
  size?: SpotlightThumbnailSize;
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
    size: {
      options: ['narrow', 'small', 'medium', 'large'],
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
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
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
  side: 'left',
  resolved_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  first_name: 'Kylian',
  last_name: 'Mbappé',
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
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

function App({ type, size }: Props): ReactElement {
  // const isMobile = useBreakPoint()
  return <SpotlightThumbnail spotlight={{ ...spotlight, type }} size={size} />;
}

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ type, size }: Props) => (
  <App type={type} size={size} />
);

export const Default = Template.bind({});
