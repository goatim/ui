import { TournamentParticipant, User, Wallet } from '@goatim/client';
import { TournamentParticipantThumbnail } from '../../../src';

export default {
  title: 'Soccer/TournamentParticipantThumbnail',
  component: TournamentParticipantThumbnail,
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
  amount: 40000000,
};

const tournamentParticipant: TournamentParticipant = {
  id: 'tp_qedfz489',
  wallet,
  gains: 5000,
  variation: 0.23,
  position: 4,
  score: 4500,
  last_position: 5,
};

function Template() {
  return <TournamentParticipantThumbnail tournamentParticipant={tournamentParticipant} />;
}

export const Default = Template.bind({});
