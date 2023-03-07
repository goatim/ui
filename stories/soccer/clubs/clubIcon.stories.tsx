import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Image } from '@goatim/client';
import { ClubIcon, ClubIconSize } from '../../../src';

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
  large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
  medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
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
