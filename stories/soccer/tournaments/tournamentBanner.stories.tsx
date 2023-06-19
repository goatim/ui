import { TournamentParticipant, User, Wallet } from '@goatim/client';
import { TournamentBanner, TournamentBannerSize } from '../../../src';

interface Props {
  size: TournamentBannerSize;
}

export default {
  title: 'Soccer/TournamentBanner',
  component: TournamentBanner,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
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
  coins: 40000000,
};

const tournamentParticipant1: TournamentParticipant = {
  id: 'tp_qedfz489',
  wallet,
  gains: 5000,
  variation: 0.353,
  position: 1,
  last_position: 2,
  score: 250,
};

const tournamentParticipant2: TournamentParticipant = {
  id: 'tp_qezdqft4a9',
  wallet,
  gains: 5000,
  variation: 0.353,
  position: 2,
  last_position: 1,
  score: 30,
};

const tournamentParticipant3: TournamentParticipant = {
  id: 'tp_zdsz5489',
  wallet,
  gains: 5000,
  variation: 0.353,
  position: 3,
  last_position: 4,
  score: 25,
};

function Template({ size }: Props) {
  return (
    <div style={{ height: 190 }}>
      <TournamentBanner
        tournamentParticipants={[
          tournamentParticipant1,
          tournamentParticipant2,
          tournamentParticipant3,
        ]}
        onMatchesClick={() => undefined}
        size={size}
        end="2023-08-05"
      />
    </div>
  );
}

export const Default = Template.bind({});
