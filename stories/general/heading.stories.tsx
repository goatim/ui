import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import Heading, { HeadingTheme, HeadingLevel, HeadingSize } from '../../src/general/heading';

interface Props {
  label?: string;
  title?: string;
  size?: HeadingSize;
  theme?: HeadingTheme;
  level?: HeadingLevel;
  align?: AlignSetting;
}

export default {
  title: 'General/Heading',
  component: Heading,
  argTypes: {
    label: {
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
    title: {
      defaultValue: 'Title',
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['small', 'medium', 'big'],
      defaultValue: 'medium',
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['dark', 'light', 'live', 'live-light'],
      defaultValue: 'dark',
      control: {
        type: 'select',
      },
    },
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'h2',
      control: {
        type: 'select',
      },
    },
    align: {
      options: ['left', 'center', 'right', 'start', 'end'],
      defaultValue: 'left',
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  title,
  label,
  size,
  theme,
  level,
  align,
}: Props) => (
  <Heading label={label} title={title} size={size} theme={theme} level={level} align={align} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'label',
  title: 'Title',
  size: 'medium',
  theme: 'dark',
  level: 'h2',
  align: 'left',
};
