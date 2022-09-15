import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import {
  Match,
  Wallet,
  User,
  PhysicalEvent,
  Club,
  Player,
  Asset,
  Dividend,
} from '@fridaygame/client';
import MatchFeed, { MatchFeedTheme } from '../../../src/soccer/matches/matchFeed';

interface Props {
  theme?: MatchFeedTheme;
}

export default {
  title: 'Soccer/MatchFeed',
  component: MatchFeed,
  argTypes: {
    theme: {
      control: {
        options: ['dark', 'light'],
        type: 'select',
      },
    },
    size: {
      control: {
        options: ['narrow', 'small', 'big'],
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
  total_gains: 4555,
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
  beginning: '2022-10-29T09:54:52.696+02:00',
  end: '2022-11-20T09:54:52.696+02:00',
  nb_participants: 213,
  is_public: true,
  // participants: Array(24)
  //   .fill(wallet)
  //   .map((w, index) => ({ ...w, position: index + 1 })),
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

const dividends: Dividend[] = [
  {
    id: 'di_qedqd54qd5',
    asset,
    percentage: 376,
    amount: 3200,
    nb_distributed: 75,
  },
  {
    id: 'di_qeqzd54qd5',
    asset,
    percentage: 458,
    amount: 6500,
    nb_distributed: 88,
  },
];

const physicalEvents: PhysicalEvent[] = [
  {
    id: 'ph_qedfz489',
    type: 'match',
    name: 'PSG - FC Nantes',
    beginning: '2022-04-29T09:54:52.696+02:00',
    end: '2022-05-20T09:54:52.696+02:00',
    dividends,
  },
  {
    id: 'ph_qeqzd489',
    type: 'match',
    name: 'PSG - FC Nantes',
    beginning: '2022-04-29T09:54:52.696+02:00',
    end: '2022-05-20T09:54:52.696+02:00',
    dividends,
  },
  {
    id: 'ph_zqdz489',
    type: 'match',
    name: 'PSG - FC Nantes',
    beginning: '2022-04-29T09:54:52.696+02:00',
    end: '2022-05-20T09:54:52.696+02:00',
    dividends,
  },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <MatchFeed match={match} theme={theme} physicalEvents={physicalEvents} />
);

export const Default = Template.bind({});

Default.args = {};
