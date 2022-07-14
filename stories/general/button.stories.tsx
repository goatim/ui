import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { Props } from '../../src/general/button';

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
      options: ['default', 'light', 'darker', 'lighter', 'submit', 'action', 'action-discreet'],
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
    fullWidth: {
      defaultValue: false,
      control: {
        type: 'boolean',
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
  fullWidth,
}: Props) => (
  <Button
    size={size}
    shape={shape}
    theme={theme}
    pending={pending}
    disabled={disabled}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    fullWidth={fullWidth}>
    {children}
  </Button>
);

export const Default = Template.bind({});
