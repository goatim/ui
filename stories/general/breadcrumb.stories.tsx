import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Breadcrumb, BreadcrumbTheme, Crumb } from '../../src';

interface Props {
  theme?: BreadcrumbTheme;
}

export default {
  title: 'General/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    theme: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const crumbs: Crumb[] = [
  {
    label: 'Accueil',
    href: 'https://www.google.com',
  },
  {
    label: 'Match de la semaine',
  },
  {
    label: 'Ma composition',
  },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <Breadcrumb crumbs={crumbs} theme={theme} />
);

export const Default = Template.bind({});

Default.args = {};
