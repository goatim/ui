import {
  Asset,
  AssetList,
  Club,
  ClubList,
  GetAssetsQuery,
  GetClubsQuery,
  GetLeaguesQuery,
  League,
  LeagueList,
  Player,
} from '@goatim/client';
import { AssetsSearch, AssetsSearchProps } from '../../src';

export default {
  title: 'Search/AssetsSearch',
  component: AssetsSearch,
  argTypes: {
    theme: {
      options: ['light', 'lighter'],
      control: {
        type: 'radio',
      },
    },
  },
};

const league1: League = {
  id: 'le_qdqzddz',
  name: 'Ligue 1',
  slug: 'ligue-1',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const league2: League = {
  id: 'le_qdveddz',
  name: 'Ligue 2',
  slug: 'ligue-2',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const league3: League = {
  id: 'le_qqzdgddz',
  name: 'Ligue 3',
  slug: 'ligue-3',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const club1: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  description: '',
  league: league1,
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const club2: Club = {
  id: '2',
  name: 'FC Nantes',
  slug: 'fc-nantes',
  description: '',
  league: league2,
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const club3: Club = {
  id: '3',
  name: 'Marseille',
  slug: 'marseille',
  description: '',
  league: league3,
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
  club: club1,
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
  name: 'Kylian Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 0.256,
  player,
  average_dividends_amount: 4000,
};

function getLeagues(query?: GetLeaguesQuery): Promise<LeagueList> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        leagues: [league1, league2, league3],
        total: 3,
      });
    }, 200);
  });
}

function getClubs(query?: GetClubsQuery): Promise<ClubList> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        clubs: [club1, club2, club3],
        total: 3,
      });
    }, 200);
  });
}

function getAssets(query?: GetAssetsQuery): Promise<AssetList> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        assets: [
          asset,
          asset,
          { ...asset, player: { ...player, last_name: query?.search || 'Nope' } },
        ],
        total: 3,
      });
    }, 200);
  });
}

function Template({ size }: AssetsSearchProps) {
  return (
    <AssetsSearch getLeagues={getLeagues} getClubs={getClubs} getAssets={getAssets} size={size} />
  );
}

export const Default = Template.bind({});
