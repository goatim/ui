import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { Props } from './button';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['text', 'filled'],
      defaultValue: 'text',
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['default', 'light', 'discreet', 'discreet-light', 'submit'],
      defaultValue: 'default',
      control: {
        type: 'select',
      },
    },
    pending: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    leftIcon: {
      control: {
        type: 'text',
      },
    },
    rightIcon: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  children,
  size,
  shape,
  theme,
  pending,
  disabled,
  leftIcon,
  rightIcon,
}: Props) => (
  <Button
    size={size}
    shape={shape}
    theme={theme}
    pending={pending}
    disabled={disabled}
    leftIcon={leftIcon}
    rightIcon={rightIcon}>
    {children}
  </Button>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  size: 'medium',
  shape: 'text',
  theme: 'default',
  pending: false,
  disabled: false,
};
