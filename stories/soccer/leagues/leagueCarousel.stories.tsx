import { Club, League } from '@goatim/client';
import { LeagueCarousel, LeagueCarouselSize } from '../../../src';

interface Props {
  size?: LeagueCarouselSize;
}

export default {
  title: 'Soccer/LeagueCarousel',
  component: LeagueCarousel,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big'],
      control: {
        type: 'select',
      },
    },
  },
};

const club: Club = {
  id: '1',
  name: 'Paris',
  slug: 'paris',
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
  clubs: new Array(15).fill(club),
};

function getClubs(leagueId: string, page: number): Club[] {
  return new Array(6).fill({ ...club, name: `Club ${page + 1}` });
}

function Template({ size }: Props) {
  return <LeagueCarousel leagues={[league, league]} size={size} getLeagueClubs={getClubs} />;
}

export const Default = Template.bind({});
