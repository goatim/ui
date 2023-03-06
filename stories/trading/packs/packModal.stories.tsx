import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor, ReactElement, useCallback } from 'react';
import { Asset, Club, Player, Pack, PackFactory } from '@fridaygame/client';
import { PackModal } from '../../../src';
import { useModals, ModalsContext } from '../../../src';

interface Props {}

export default {
  title: 'Trading/PackModal',
  component: PackModal,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

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
  first_name: 'Kylian',
  last_name: 'Mbappé',
  number: 10,
  position: 'forward',
  side: 'left',
  resolved_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  first_name: 'Kylian',
  last_name: 'Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 0.003,
  player,
};

const factory: PackFactory = {
  id: 'pf_cUkDdk9VW4PwvsF',
  creation: '2021-09-29T16:08:39.129+00:00',
  // title: 'Fellicitation !',
};

const pack: Pack = {
  id: 'pa_cUkDdk9VW4PwvsF',
  creation: '2021-09-29T16:08:39.129+00:00',
  factory,
  share_bulks: [
    {
      asset,
      nb_shares: 2,
    },
    {
      asset,
      nb_shares: 1,
    },
    {
      asset,
      nb_shares: 5,
    },
    {
      asset,
      nb_shares: 2,
    },
  ],
  tags: ['starter'],
};

function App(): ReactElement {
  const { pushModal } = useModals();

  const openModal = useCallback(() => {
    pushModal({
      type: 'overlay',
      element: <PackModal pack={pack} />,
    });
  }, [pushModal]);

  return (
    <div>
      <PackModal pack={pack} />
      <button onClick={openModal}>Open modal</button>
    </div>
  );
}

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <ModalsContext>
    <App />
  </ModalsContext>
);

export const Default = Template.bind({});

Default.args = {};
