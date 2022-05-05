import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletThumbnail from '../market/walletThumbnail';

export interface Props {
  creator: Wallet;
  nb_participants?: number;
}

export default function MatchCreator({ creator, nb_participants }: Props): ReactElement {
  return (
    <div className="friday-ui-match-creator">
      <WalletThumbnail wallet={creator} />
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
