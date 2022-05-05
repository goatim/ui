import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Match, Wallet, User } from '@fridaygame/client';
import MatchThumbnail from '../../src/soccer/matchThumbnail';

interface Props {}

export default {
  title: 'Soccer/MatchThumbnail',
  component: MatchThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

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
  icon: {
    id: 'me_ddqHH',
    thumbnail_url: 'https://picsum.photos/200',
    medium_url: 'https://picsum.photos/400',
  },
  start: '2022-04-29T09:54:52.696+02:00',
  end: '2022-05-20T09:54:52.696+02:00',
  nb_participants: 213,
  is_public: true,
  participants: Array(24).fill(wallet),
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <MatchThumbnail match={match} />
);

export const Default = Template.bind({});

Default.args = {};
