import { Match, User, Wallet } from '@goatim/client';
import { MatchStatusThumbnail } from '../../../src';

export default {
  title: 'Soccer/MatchStatusThumbnail',
  component: MatchStatusThumbnail,
  argTypes: {},
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
  beginning: '2022-08-29T09:54:52.696+02:00',
  end: '2022-08-20T09:54:52.696+02:00',
  nb_participants: 213,
  is_public: true,
};

function Template() {
  return <MatchStatusThumbnail status={match.status} theme="light" />;
}

export const Default = Template.bind({});
