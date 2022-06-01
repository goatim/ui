import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletThumbnail from '../market/walletThumbnail';

export type MatchCreatorTheme = 'default' | 'light';

export interface Props {
  creator: Wallet;
  nb_participants?: number;
  theme?: MatchCreatorTheme;
}

export default function MatchCreator({ creator, nb_participants, theme }: Props): ReactElement {
  return (
    <div className={`friday-ui-match-creator ${theme}`}>
      <WalletThumbnail wallet={creator} infos="picture" theme={theme} />
      <div className="body">
        <span className="creator">Organisé par {creator.name}</span>
        {nb_participants ? (
          <span>
            {nb_participants} participant{nb_participants > 1 ? 's' : ''}
          </span>
        ) : (
          <span>Aucun participant</span>
        )}
      </div>
    </div>
  );
}
