import { ReactElement } from 'react';
import { Pack } from '@fridaygame/client';
import PackThumbnail from './packThumbnail';

export interface Props {
  pack: Pack;
}

export default function PackModal({ pack }: Props): ReactElement {
  return (
    <div className="friday-ui-pack-modal">
      <PackThumbnail pack={pack} />
    </div>
  );
}
