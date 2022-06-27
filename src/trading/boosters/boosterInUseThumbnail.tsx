import { ReactElement } from 'react';
import { BoosterInUse } from '@fridaygame/client';
import Icon from '../../general/icon';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';
import PercentageVariation from '../../market/percentageVariation';

export interface Props {
  boosterInUse: BoosterInUse;
  onStop?: () => void | Promise<void>;
}

export default function BoosterInUseThumbnail({ boosterInUse, onStop }: Props): ReactElement {
  return (
    <div
      className={`friday-ui-booster-in-use-thumbnail${!boosterInUse.stopped_at ? ' active' : ''}`}>
      <div className="container">
        <div className="infos">
          <span className="label">Booster</span>
          <div className="leverage">
            <span className="value">x{boosterInUse.leverage}</span>
            {!boosterInUse.stopped_at && onStop ? (
              <button className="stop" onClick={onStop}>
                <Icon name="x-circle" size={18} />
              </button>
            ) : null}
          </div>
        </div>

        <div className="variations">
          <FridayCoinsVariation variation={boosterInUse.gains} size="medium" />
          <PercentageVariation variation={boosterInUse.variation} />
        </div>
      </div>
    </div>
  );
}
