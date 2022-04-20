import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Image } from '@cezembre/fronts';
import ClubIcon, { ClubIconSize } from '../../src/soccer/clubIcon';

interface Props {
  size?: ClubIconSize;
  defined?: boolean;
}

export default {
  title: 'Soccer/ClubIcon',
  component: ClubIcon,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    defined: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const icon: Image = {
  id: '1',
  url: 'https://www.psg.fr/img/logos/psg-logo.png',
  large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, defined }: Props) => (
  <ClubIcon icon={defined ? icon : undefined} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  defined: true,
};
