import { ReactElement, MouseEvent } from 'react';
import { Asset } from '@fridaygame/client';
import { To } from 'react-router-dom';
import PlayerThumbnail from '../soccer/playerThumbnail';
import QuotationGraph from './quotationGraph';
import FridayCoins from '../market/fridayCoins';
import PercentageVariation from '../market/percentageVariation';
import Button from '../general/button';

export interface Props {
  asset: Asset;
  clubTo?: To;
  onBuy?: (event: MouseEvent<HTMLButtonElement>) => void;
  onSell?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function AssetOverview({ asset, clubTo, onBuy, onSell }: Props): ReactElement {
  return (
    <div className="friday-ui-asset-overview">
      <div className="header">
        {asset.type === 'player' && asset.player && typeof asset.player === 'object' ? (
          <PlayerThumbnail player={asset.player} size="full" clubTo={clubTo} />
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
          <Button shape="filled" theme="action" onClick={onBuy}>
            Acheter
          </Button>
        </div>
        <div className="action">
          <Button shape="filled" theme="action-discreet" onClick={onSell}>
            Vendre
          </Button>
        </div>
      </div>
    </div>
  );
}
