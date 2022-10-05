import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Field } from '@cezembre/forms';
import { JSXElementConstructor } from 'react';
import { Booster } from '@fridaygame/client';
import Radio from '../../src/general/radio';
import BoosterFactoryThumbnail from '../../src/trading/boosters/boosterFactoryThumbnail';

interface Props {
  label?: string;
}

export default {
  title: 'General/Radio',
  component: Radio,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const boosters: Booster[] = [
  {
    id: 'bo_ied5',
    name: 'Pavaaard !',
    slug: 'pavaaard',
    price: 100,
    leverage: 2,
    nb_in_wallet: 10,
  },
  {
    id: 'bo_iqzd',
    name: 'Charo',
    slug: 'charo',
    price: 150,
    leverage: 5,
    nb_in_wallet: 0,
  },
  {
    id: 'bo_qzdi',
    name: 'Zizou',
    slug: 'zizou',
    price: 2,
    leverage: 10,
    nb_in_wallet: 0,
  },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ label }: Props) => (
  <Form>
    <Field
      name="radio"
      component={Radio}
      label={label}
      options={boosters.map((booster: Booster) => ({
        value: booster.id,
        element: <BoosterFactoryThumbnail booster={booster} size="medium" />,
      }))}
    />
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
