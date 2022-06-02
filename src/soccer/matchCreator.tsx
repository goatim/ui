import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletThumbnail from '../market/walletThumbnail';

export type MatchCreatorTheme = 'default' | 'light';

export interface Props {
  creator: Wallet;
  total_compositions?: number;
  theme?: MatchCreatorTheme;
}

export default function MatchCreator({ creator, total_compositions, theme }: Props): ReactElement {
  return (
    <div className={`friday-ui-match-creator ${theme}`}>
      <WalletThumbnail wallet={creator} infos="picture" theme={theme} />
      <div className="body">
        <span className="creator">Organisé par {creator.name}</span>
        {total_compositions ? (
          <span>
            {total_compositions} participant{total_compositions > 1 ? 's' : ''}
          </span>
        ) : (
          <span>Aucun participant</span>
        )}
      </div>
    </div>
  );
}
