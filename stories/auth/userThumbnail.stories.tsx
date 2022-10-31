import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { User } from '@fridaygame/client';
import UserThumbnail, { UserThumbnailSize } from '../../src/auth/users/userThumbnail';

interface Props {
  size?: UserThumbnailSize;
  is_defined?: boolean;
}

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
} as ComponentMeta<JSXElementConstructor<Props>>;

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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, is_defined }: Props) => (
  <UserThumbnail user={{ ...user, picture: is_defined ? user.picture : undefined }} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
};
