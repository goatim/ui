import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { TournamentParticipant, User, Wallet } from '@goatim/client';
import { TournamentParticipantPodium } from '../../../src';

interface Props {}

export default {
  title: 'Soccer/TournamentParticipantPodium',
  component: TournamentParticipantPodium,
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
  amount: 40000000,
};

const tournamentParticipant1: TournamentParticipant = {
  id: 'tp_qedfz489',
  wallet,
  dividends_gains: 5000,
  dividends_percentage: 0.353,
  position: 1,
  last_position: 2,
  score: 250,
};

const tournamentParticipant2: TournamentParticipant = {
  id: 'tp_qezdqft4a9',
  wallet,
  dividends_gains: 5000,
  dividends_percentage: 0.23,
  position: 2,
  last_position: 1,
  score: 30,
};

const tournamentParticipant3: TournamentParticipant = {
  id: 'tp_zdsz5489',
  wallet,
  dividends_gains: 5000,
  dividends_percentage: 0.013,
  position: 3,
  last_position: 4,
  score: 25,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <div style={{ height: 190 }}>
    <TournamentParticipantPodium
      tournamentParticipants={[
        tournamentParticipant1,
        tournamentParticipant2,
        tournamentParticipant3,
      ]}
    />
  </div>
);

export const Default = Template.bind({});
