import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Player, SearchResult } from '@fridaygame/client';
import SearchInput, { SearchInputTheme } from '../../src/search/searchInput';

interface Props {
  theme?: SearchInputTheme;
}

export default {
  title: 'Search/SearchInput',
  component: SearchInput,
  argTypes: {
    theme: {
      options: ['light', 'lighter'],
      control: {
        type: 'radio',
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
  name: 'Kylian Mbappé',
  number: 10,
  position: 'attacking_midfield',
  side: 'left',
  resolved_position: 'Attaquant centre',
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

const results: SearchResult[] = [
  {
    type: 'player-asset',
    id: '1',
    asset,
  },
  {
    type: 'player-asset',
    id: '2',
    asset,
  },
  {
    type: 'player-asset',
    id: '3',
    asset,
  },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <SearchInput
    flat
    results={results}
    onClickResult={(result) => console.log(result.id)}
    theme={theme}
  />
);

export const Default = Template.bind({});
