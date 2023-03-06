import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Match, Wallet, User, MatchStatus, Composition } from '@fridaygame/client';
import { MatchThumbnail } from '../../../src';

interface Props {
  status?: MatchStatus;
}

export default {
  title: 'Soccer/MatchThumbnail',
  component: MatchThumbnail,
  argTypes: {
    status: {
      options: ['created', 'open', 'ongoing', 'passed', 'closing', 'closed', 'cancelled'],
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

const composition1: Composition = {
  id: 'co_qkuehd456',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?a=a',
    },
    name: 'Leo',
    amount: 40000000,
  },
  position: 1,
  dividends_percentage: 1.23,
  dividends_gains: 45000,
  score: 1230,
};

const composition2: Composition = {
  id: 'co_qkqzdqzd56',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?b=b',
    },
    name: 'Thibz',
    amount: 40000000,
  },
  position: 2,
  dividends_percentage: 1.02,
  dividends_gains: 41000,
  score: 1100,
};

const composition3: Composition = {
  id: 'co_qefahd456',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?c=c',
    },
    name: 'Anastasia',
    amount: 40000000,
  },
  position: 3,
  dividends_percentage: 0.95,
  dividends_gains: 25000,
  score: 950,
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
  podium: [composition1, composition2, composition3],
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ status }: Props) => (
  <MatchThumbnail match={{ ...match, status }} />
);

export const Default = Template.bind({});

Default.args = {};
