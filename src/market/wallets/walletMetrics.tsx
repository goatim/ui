import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import FridayCoins from '../fridayCoins';
import PercentageVariation from '../percentageVariation';
import QuotationGraph from '../../trading/quotations/quotationGraph';
import RankPosition from '../../trading/ranks/rankPosition';

export type WalletMetricsSize = 'narrow' | 'normal';

export interface Props {
  wallet: Wallet;
  size?: WalletMetricsSize;
}

export default function WalletMetrics({ wallet, size = 'normal' }: Props): ReactElement {
  return (
    <div className={`friday-ui-wallet-metrics ${size}`}>
      <div className="metrics">
        <div className="metric">
          <span className="label">Classement</span>
          {wallet.rank && typeof wallet.rank === 'object' ? (
            <span className="rank">{wallet.rank.name}</span>
          ) : (
            <span className="rank">Non classé</span>
          )}
          {wallet.rank_position ? (
            <RankPosition position={wallet.rank_position} size="medium" theme="light" />
          ) : null}
        </div>

        <div className={`metric${size !== 'narrow' ? ' center' : ''}`}>
          <span className="label">Solde espèces</span>
          <FridayCoins amount={wallet.amount} theme="light" size="medium" />
        </div>

        <div className={`metric${size !== 'narrow' ? ' right' : ''}`}>
          <span className="label">Évaluation titres</span>
          <FridayCoins amount={wallet.portfolios_quotation} theme="light" size="medium" />
          <PercentageVariation variation={wallet.portfolios_session_variation} size="medium" />
        </div>
      </div>

      <div className="evolution">
        <QuotationGraph
          quotations={[
            { t: 1, v: 3 },
            { t: 2, v: 2 },
            { t: 5, v: 5 },
            { t: 6, v: 4 },
          ]}
        />
      </div>
    </div>
  );
}
