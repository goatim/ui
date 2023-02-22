import { ReactElement } from 'react';
import { Pack } from '@fridaygame/client';
import { PackThumbnail } from './packThumbnail';

export interface PackModalProps {
  pack: Pack;
}

export function PackModal({ pack }: PackModalProps): ReactElement {
  return (
    <div className="friday-ui-pack-modal">
      <PackThumbnail pack={pack} />
    </div>
  );
}
