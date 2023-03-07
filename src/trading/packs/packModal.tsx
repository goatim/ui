import { ReactElement } from 'react';
import { Pack } from '@goatim/client';
import { PackThumbnail } from './packThumbnail';

export interface PackModalProps {
  pack: Pack;
}

export function PackModal({ pack }: PackModalProps): ReactElement {
  return (
    <div className="goatim-ui-pack-modal">
      <PackThumbnail pack={pack} />
    </div>
  );
}
