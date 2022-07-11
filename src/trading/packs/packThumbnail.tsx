import { ReactElement } from 'react';
import { Pack } from '@fridaygame/client';
import PackIcon from './packIcon';
import ShareBulkList from '../shareBulks/shareBulkList';

export interface Props {
  pack: Pack;
}

export default function PackThumbnail({ pack }: Props): ReactElement {
  return (
    <div className="friday-ui-pack-thumbnail">
      <div className="header">
        <div className="icon">
          <PackIcon pack={pack} />
        </div>
        <h1>{pack.resolved_title || 'Félicitations !'}</h1>
        <p>
          {pack.resolved_message || 'Voici quelques actions qui te permettront de démarrer le jeu.'}
        </p>
      </div>
      {pack.share_bulks && Array.isArray(pack.share_bulks) ? (
        <div className="shares-bulks">
          <ShareBulkList shareBulks={pack.share_bulks} />
        </div>
      ) : null}
    </div>
  );
}
