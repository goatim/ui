import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import FridayCoins from './fridayCoins';
import PercentageVariation from './percentageVariation';
import QuotationGraph from '../trading/quotationGraph';

export interface Props {
  wallet: Wallet;
}

export default function WalletMetrics({ wallet }: Props): ReactElement {
  return (
    <div className="friday-ui-wallet-metrics">
      <div className="metrics">
        <div className="metric">
          <span className="label">Classement</span>
          <span className="rank">Ligue de bronze</span>
          <span className="rank-position">26 ème</span>
        </div>

        <div className="metric center">
          <span className="label">Solde espèces</span>
          <FridayCoins amount={wallet.amount} theme="light" size="medium" />
        </div>

        <div className="metric right">
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
