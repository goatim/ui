import { ReactElement } from 'react';
import { ClosedMatchNotificationPayload } from '@fridaygame/client/dist/community/notifications/model';
import CompositionThumbnail from '../../soccer/compositions/compositionThumbnail';

export interface Props {
  payload: ClosedMatchNotificationPayload;
}

export default function ClosedMatchNotification({ payload }: Props): ReactElement {
  return (
    <div className="friday-ui-closed-match-notification">
      <span>
        {payload.match ? (
          <b>{typeof payload?.match === 'object' ? payload.match.title : 'untitled'}</b>
        ) : null}{' '}
        - Match terminé
      </span>
      {payload.composition && typeof payload.composition === 'object' ? (
        <div className="composition">
          <CompositionThumbnail composition={payload.composition} showScore showDividendsGains />
        </div>
      ) : null}
    </div>
  );
}
