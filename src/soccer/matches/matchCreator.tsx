import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletPicture from '../../market/wallets/walletPicture';

export type MatchCreatorTheme = 'dark' | 'light';

export interface Props {
  creator: Wallet;
  theme?: MatchCreatorTheme;
}

export default function MatchCreator({ creator, theme }: Props): ReactElement {
  return (
    <div className={`friday-ui-match-creator ${theme}`}>
      <WalletPicture wallet={creator} theme={theme} size="small" />
      <span>
        Organisé par <span>{'Friday' || creator.name}</span>
      </span>
    </div>
  );
}
