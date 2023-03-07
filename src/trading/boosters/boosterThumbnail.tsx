import { ReactElement } from 'react';
import { Booster } from '@goatim/client';
import { Icon } from '../../general';
import { GoatimCoinsGains, PercentageVariation } from '../../market';

export interface BoosterThumbnailProps {
  booster: Booster;
  onStop?: () => unknown;
}

export function BoosterThumbnail({ booster, onStop }: BoosterThumbnailProps): ReactElement {
  return (
    <div className={`goatim-ui-booster-thumbnail${!booster.stopped_at ? ' active' : ''}`}>
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
          <GoatimCoinsGains variation={booster.gains} size="medium" />
          <PercentageVariation variation={booster.variation} />
        </div>
      </div>
    </div>
  );
}
