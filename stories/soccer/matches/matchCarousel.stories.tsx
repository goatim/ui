import { Match, User, Wallet } from '@goatim/client';
import { MatchCarousel, MatchCarouselSize } from '../../../src/soccer';

interface Props {
  size?: MatchCarouselSize;
}

export default {
  title: 'Soccer/MatchCarousel',
  component: MatchCarousel,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big'],
      },
    },
  },
};

const owner: User = {
  id: 'us_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  pseudo: 'Player 1',
  first_name: 'Lucien',
  last_name: 'Perouze',
};

const wallet: Wallet = {
  id: 'wa_sopsaA',
  owner,
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Smart Monkey',
};

const match: Match = {
  id: 'ma_hqedh654qed',
  creator: wallet,
  title: 'Match de la semaine',
  slug: 'match-de-la-semaine',
  beginning: '2022-10-29T09:54:52.696+02:00',
  end: '2023-06-20T09:54:52.696+02:00',
  is_public: true,
  nb_participants: 213,
};

function Template({ size }: Props) {
  return <MatchCarousel matches={[match, match, match, match, match]} size={size} />;
}

export const Default = Template.bind({});
