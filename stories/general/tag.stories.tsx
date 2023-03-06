import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Tag, TagSize, TagTheme } from '../../src';

interface Props {
  size?: TagSize;
  theme?: TagTheme;
}

export default {
  title: 'General/Tag',
  component: Tag,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big'],
      defaultValue: 'medium',
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['light-medium-blue', 'light-fushia', 'dark-white', 'full-electric-blue'],
      defaultValue: 'medium-blue',
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, theme }: Props) => (
  <Tag size={size} theme={theme} leftIcon="trophy">
    x3
  </Tag>
);

export const Default = Template.bind({});
