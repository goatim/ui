import { ReactElement } from 'react';
import { Wallet } from '@goatim/client';
import { PercentageVariation } from '../percentageVariation';
import { RankPosition } from '../../trading';
import { GoatimCoinsAmount } from '../goatimCoins';

export type WalletMetricsSize = 'narrow' | 'normal';

export interface WalletMetricsProps {
  wallet: Wallet;
  size?: WalletMetricsSize;
}

export function WalletMetrics({ wallet, size = 'normal' }: WalletMetricsProps): ReactElement {
  return (
    <div className={`goatim-ui-wallet-metrics ${size}`}>
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
          <span className="label">Solde GTC</span>
          <GoatimCoinsAmount amount={wallet.coins} theme="light" size="medium" />
        </div>

        <div className={`metric${size !== 'narrow' ? ' right' : ''}`}>
          <span className="label">Évaluation équipe</span>
          <GoatimCoinsAmount amount={wallet.portfolios_quotation} theme="light" size="medium" />
          <PercentageVariation variation={wallet.portfolios_session_variation} size="medium" />
        </div>
      </div>

      <div className="evolution">
        {/* <QuotationHistoryGraph */}
        {/*  quotationHistory={} */}
        {/* /> */}
      </div>
    </div>
  );
}
