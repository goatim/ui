import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletPicture from '../../market/wallets/walletPicture';

export type MatchCreatorTheme = 'dark' | 'light';

export interface Props {
  creator: Wallet;
  total_participants?: number;
  theme?: MatchCreatorTheme;
}

export default function MatchCreator({ creator, total_participants, theme }: Props): ReactElement {
  return (
    <div className={`friday-ui-match-creator ${theme}`}>
      <WalletPicture wallet={creator} theme={theme} />
      <div className="body">
        {/* <span className="creator">Organisé par {creator.name}</span> */}
        <span className="creator">Organisé par Friday</span>
        {total_participants ? (
          <span>
            {total_participants} participant{total_participants > 1 ? 's' : ''}
          </span>
        ) : (
          <span>Aucun participant</span>
        )}
      </div>
    </div>
  );
}
