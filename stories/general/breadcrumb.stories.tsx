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
};

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

function Template({ theme }: Props) {
  return <Breadcrumb crumbs={crumbs} theme={theme} />;
}

export const Default = Template.bind({});
