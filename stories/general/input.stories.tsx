import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field, Form } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import {
  Input,
  InputShape,
  InputSize,
  InputSuggestion,
  InputTheme,
  SuggestionsNamespace,
} from '../../src';

interface Props {
  label?: string;
  shape?: InputShape;
  theme?: InputTheme;
  size?: InputSize;
  placeholder?: string;
  show_suggestions?: boolean;
}

export default {
  title: 'General/Input',
  component: Input,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    shape: {
      options: ['square', 'round'],
      defaultValue: 'square',
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['light', 'darker', 'lighter', 'dark'],
      defaultValue: 'light',
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'medium', 'big'],
      defaultValue: 'medium',
      control: {
        type: 'select',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    show_suggestions: {
      name: 'Show suggestions',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const playersSuggestions: InputSuggestion[] = [
  { value: 'Kylian Mbappé' },
  { value: 'Lionel Messi' },
  { value: 'Neymar JR.' },
];
const clubsSuggestions: InputSuggestion[] = [
  { value: 'PSG' },
  { value: 'Real Madrid' },
  { value: 'FC Nantes' },
];

const suggestionsNamespaces: SuggestionsNamespace[] = [
  { namespace: 'Joueurs', suggestions: playersSuggestions },
  { namespace: 'Clubs', suggestions: clubsSuggestions },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  label,
  shape,
  theme,
  size,
  placeholder,
  show_suggestions,
}: Props) => (
  <Form>
    <Field
      name="input"
      type="email"
      component={Input}
      label={label}
      shape={shape}
      theme={theme}
      size={size}
      placeholder={placeholder}
      suggestions={show_suggestions ? suggestionsNamespaces : undefined}
    />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
