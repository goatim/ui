import { Club } from '@goatim/client';
import { ClubList } from '../../../src';

interface Props {
  length?: number;
}

export default {
  title: 'Soccer/ClubList',
  component: ClubList,
  argTypes: {
    length: {
      control: {
        type: 'number',
      },
    },
  },
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

function Template({ length }: Props) {
  return <ClubList clubs={Array(length).fill(club)} columns={3} size="big" shape="box" />;
}

export const Default = Template.bind({});
