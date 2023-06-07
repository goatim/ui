import { Club, League } from '@goatim/client';
import { ClubThumbnail, ClubThumbnailProps } from '../../../src';

export default {
  title: 'Soccer/ClubThumbnail',
  component: ClubThumbnail,
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

const club: Club = {
  id: '1',
  league,
  name: 'Manchester United',
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

function Template({ size, theme, shape, showLeague, leagueHref }: ClubThumbnailProps) {
  return (
    <ClubThumbnail
      club={club}
      size={size}
      theme={theme}
      shape={shape}
      showLeague={showLeague}
      leagueHref={leagueHref}
    />
  );
}

export const Default = Template.bind({});
