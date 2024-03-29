import { Field, Form } from '@cezembre/forms';
import { adaptGoatimCoinsCoins, resolveGoatimCoinsCoins } from '@goatim/client';
import { Counter } from '../../src';

interface Props {
  label?: string;
}

export default {
  title: 'General/Counter',
  component: Counter,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
};

function Template({ label }: Props) {
  return (
    <Form>
      <Field<number | undefined>
        name="counter"
        component={Counter}
        label={label || 'Montant (GTC)'}
        resolver={resolveGoatimCoinsCoins}
        adapter={adaptGoatimCoinsCoins}
        increment={100}
        initialValue={42000}
        conversion="0.002 ETH"
      />
    </Form>
  );
}

export const Default = Template.bind({});
