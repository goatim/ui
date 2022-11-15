import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Match, Wallet, User, MatchStatus } from '@fridaygame/client';
import MatchThumbnail from '../../../src/soccer/matches/matchThumbnail';

interface Props {
  status?: MatchStatus;
}

export default {
  title: 'Soccer/MatchThumbnail',
  component: MatchThumbnail,
  argTypes: {
    status: {
      options: ['planned', 'ongoing', 'passed', 'cancelled'],
      control: {
        type: 'select',
      },
    },
  },
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
  beginning: '2022-10-29T09:54:52.696+02:00',
  end: '2023-06-20T09:54:52.696+02:00',
  is_public: true,
  nb_participants: 213,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ status }: Props) => (
  <MatchThumbnail match={{ ...match, status }} />
);

export const Default = Template.bind({});

Default.args = {};
