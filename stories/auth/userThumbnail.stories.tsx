import { User } from '@goatim/client';
import { UserThumbnail, UserThumbnailProps } from '../../src';

export default {
  title: 'Auth/UserThumbnail',
  component: UserThumbnail,
  argTypes: {
    size: {
      control: {
        options: ['small', 'medium', 'big'],
        type: 'select',
      },
    },
    infos: {
      control: {
        options: ['picture', 'picture-and-name'],
        type: 'select',
      },
    },
    is_defined: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const user: User = {
  id: 'us_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  pseudo: 'Player 1',
  first_name: 'Lucien',
  last_name: 'Perouze',
};

function Template({ size }: UserThumbnailProps) {
  return <UserThumbnail user={user} size={size} />;
}

export const Default = Template.bind({});
