import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

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
      options: ['filled', 'text'],
      defaultValue: 'text',
      control: {
        type: 'select',
      },
    },
    theme: {
      options: [
        'electric-blue',
        'dark',
        'light',
        'transparent-dark',
        'transparent-light',
        'buy',
        'sell',
      ],
      defaultValue: 'dark',
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
}: ButtonProps) => (
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
