import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Upload } from '../../src';

interface Props {
  label?: string;
}

export default {
  title: 'General/Upload',
  component: Upload,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label }: Props) => (
  <Upload label={label} />
);

export const Default = Template.bind({});
