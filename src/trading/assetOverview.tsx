import { ReactElement } from 'react';
import { Asset } from '@fridaygame/client';
import PlayerThumbnail from '../soccer/playerThumbnail';
import QuotationGraph from './quotationGraph';
import FridayCoins from '../market/fridayCoins';
import PercentageVariation from '../market/percentageVariation';
import Button from '../general/button';

export interface Props {
  asset: Asset;
}

export default function AssetOverview({ asset }: Props): ReactElement {
  return (
    <div className="friday-ui-asset-overview">
      <div className="header">
        {asset.type === 'player' && asset.player && typeof asset.player === 'object' ? (
          <PlayerThumbnail player={asset.player} size="full" />
        ) : null}
        <div className="metrics">
          <span className="shares">
            {asset.shares || 0} action{asset.shares || 0 > 1 ? 's' : null}
          </span>
          <FridayCoins amount={asset.quotation} size="large" />
          <PercentageVariation variation={asset.session_variation} size="big" />
        </div>
      </div>
      <div className="quotation">
        <QuotationGraph />
      </div>
      <div className="actions">
        <div className="action">
          <Button shape="filled" theme="action">
            Acheter
          </Button>
        </div>
        <div className="action">
          <Button shape="filled" theme="action-discreet">
            Vendre
          </Button>
        </div>
      </div>
    </div>
  );
}
