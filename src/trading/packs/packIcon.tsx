import { ReactElement } from 'react';
import { Pack } from '@fridaygame/client';
import Icon from '../../general/icon';

export interface Props {
  pack: Pack;
}

export default function PackIcon({ pack }: Props): ReactElement {
  if (pack.icon) {
    return (
      <div className="friday-ui-pack-icon">
        <img src={pack.icon.medium_url} alt="Pack factory icon" />
      </div>
    );
  }
  if (pack.factory && typeof pack.factory === 'object' && pack.factory.icon) {
    return (
      <div className="friday-ui-pack-icon">
        <img src={pack.factory.icon.medium_url} alt="Pack factory icon" />
      </div>
    );
  }
  return (
    <div className="friday-ui-pack-icon">
      <Icon name="gift" size={50} />
    </div>
  );
}
