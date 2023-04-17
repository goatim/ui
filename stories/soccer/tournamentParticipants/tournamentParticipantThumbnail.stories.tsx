import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { TournamentParticipant, User, Wallet } from '@goatim/client';
import { TournamentParticipantThumbnail } from '../../../src';

interface Props {}

export default {
  title: 'Soccer/TournamentParticipantThumbnail',
  component: TournamentParticipantThumbnail,
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

const tournamentParticipant: TournamentParticipant = {
  id: 'tp_qedfz489',
  wallet,
  gains: 5000,
  variation: 0.23,
  position: 4,
  score: 4500,
  last_position: 5,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <TournamentParticipantThumbnail tournamentParticipant={tournamentParticipant} />
);

export const Default = Template.bind({});
