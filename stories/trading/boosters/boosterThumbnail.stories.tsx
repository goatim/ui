import { Booster } from '@goatim/client';
import { BoosterThumbnail } from '../../../src';

interface Props {
  active?: boolean;
  positive?: boolean;
}

export default {
  title: 'Trading/BoosterThumbnail',
  component: BoosterThumbnail,
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
    positive: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const booster: Booster = {
  id: 'bi_cUkDdk9VW4PwvsF',
  leverage: 2,
  start_quotation: 42220,
  stop_quotation: 422200,
};

function Template({ active, positive }: Props) {
  return (
    <BoosterThumbnail
      booster={{
        ...booster,
        stopped_at: !active ? '2021-11-04 14:07:26.679000 +00:00' : undefined,
        gains: positive ? 42000 : -42000,
        variation: positive ? 3200 : -3200,
      }}
      onStop={() => undefined}
    />
  );
}

export const Default = Template.bind({});
