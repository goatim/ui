import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Dividend, PhysicalEvent, Player } from '@fridaygame/client';
import PhysicalEventThumbnail, {
  PhysicalEventThumbnailTheme,
} from '../../../src/soccer/physicalEvents/physicalEventThumbnail';

interface Props {
  theme?: PhysicalEventThumbnailTheme;
}

export default {
  title: 'Soccer/PhysicalEventThumbnail',
  component: PhysicalEventThumbnail,
  argTypes: {
    theme: {
      options: ['default', 'light'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const club: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  description: '',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
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
  textual_position: 'Attaquant centre',
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

const physicalEvent: PhysicalEvent = {
  id: 'ph_qedfz489',
  type: 'match',
  name: 'PSG - FC Nantes',
  beginning: '2022-04-29T09:54:52.696+02:00',
  end: '2022-05-20T09:54:52.696+02:00',
  dividends,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <PhysicalEventThumbnail physicalEvent={physicalEvent} theme={theme} />
);

export const Default = Template.bind({});

Default.args = {
  theme: 'default',
};
