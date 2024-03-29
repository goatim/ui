import { Heading, HeadingLevel, HeadingSize, HeadingTheme } from '../../src';

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
};

function Template({ title, label, size, theme, level, align }: Props) {
  return (
    <Heading
      label={label}
      size={size}
      theme={theme}
      level={level}
      align={align}
      icon="soccer-field">
      {title}
    </Heading>
  );
}

export const Default = Template.bind({});
