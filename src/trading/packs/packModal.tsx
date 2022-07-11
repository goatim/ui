import { ReactElement } from 'react';
import { Pack } from '@fridaygame/client';
import PackThumbnail from './packThumbnail';
import Button from '../../general/button';

export interface Props {
  pack: Pack;
  onContinue?(): void;
}

export default function PackModal({ pack, onContinue }: Props): ReactElement {
  return (
    <div className="friday-ui-pack-modal">
      <div className="pack">
        <PackThumbnail pack={pack} />
      </div>
      {onContinue ? (
        <div className="action">
          <Button onClick={onContinue} theme="submit">
            Continuer
          </Button>
        </div>
      ) : null}
    </div>
  );
}
