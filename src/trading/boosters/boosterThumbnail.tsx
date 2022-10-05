import { ReactElement } from 'react';
import { Booster } from '@fridaygame/client';
import Icon from '../../general/icon';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';
import PercentageVariation from '../../market/percentageVariation';

export interface Props {
  booster: Booster;
  onStop?: () => unknown;
}

export default function BoosterThumbnail({ booster, onStop }: Props): ReactElement {
  return (
    <div className={`friday-ui-booster-thumbnail${!booster.stopped_at ? ' active' : ''}`}>
      <div className="container">
        <div className="infos">
          <span className="label">Booster</span>
          <div className="leverage">
            <span className="value">x{booster.leverage}</span>
            {!booster.stopped_at && onStop ? (
              <button className="stop" onClick={onStop}>
                <Icon name="x-circle" size={18} />
              </button>
            ) : null}
          </div>
        </div>

        <div className="variations">
          <FridayCoinsVariation variation={booster.gains} size="medium" />
          <PercentageVariation variation={booster.variation} />
        </div>
      </div>
    </div>
  );
}