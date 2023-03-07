import { ReactElement } from 'react';
import { Wallet } from '@goatim/client';
import { WalletPicture } from '../../market';

export type MatchCreatorTheme = 'dark' | 'light';

export interface MatchCreatorProps {
  creator: Wallet;
  theme?: MatchCreatorTheme;
}

export function MatchCreator({ creator, theme }: MatchCreatorProps): ReactElement {
  return (
    <div className={`goatim-ui-match-creator ${theme}`}>
      <WalletPicture wallet={creator} theme={theme} size="small" />
      <span>
        Organisé par <span>{'Goatim' || creator.name}</span>
      </span>
    </div>
  );
}
