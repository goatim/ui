import { Club, League } from '@goatim/client';
import { LeagueOverview } from '../../../src';

export default {
  title: 'Soccer/LeagueOverview',
  component: LeagueOverview,
  argTypes: {},
};

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

const league: League = {
  id: '1',
  name: 'Ligue 1',
  slug: 'ligue-1',
  description: '',
  icon: {
    id: '1',
    url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    large_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    medium_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    small_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
    thumbnail_url:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Ligue_1_Uber_Eats_2020.svg/411px-Logo_Ligue_1_Uber_Eats_2020.svg.png?20200821142847',
  },
};

function getClubs() {
  return new Array(6).fill({ ...club, id: Math.random().toString() });
}

function Template() {
  return <LeagueOverview league={league} getClubs={getClubs} />;
}

export const Default = Template.bind({});
