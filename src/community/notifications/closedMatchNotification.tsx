import { ReactElement } from 'react';
import { ClosedMatchNotificationPayload } from '@fridaygame/client/dist/community/notifications/model';
import { CompositionThumbnail } from '../../soccer';
import { FridayCoinsGains } from '../../market';

export interface ClosedMatchNotificationProps {
  payload: ClosedMatchNotificationPayload;
}

export function ClosedMatchNotification({ payload }: ClosedMatchNotificationProps): ReactElement {
  return (
    <div className="friday-ui-closed-match-notification">
      <span>
        {payload.match ? (
          <b>{typeof payload?.match === 'object' ? payload.match.title : 'untitled'}</b>
        ) : null}{' '}
        - Match terminé
      </span>
      {payload.composition && typeof payload.composition === 'object' ? (
        <>
          <div className="composition">
            <CompositionThumbnail composition={payload.composition} showScore showDividendsGains />
          </div>
          {payload.composition.position === 1 ? (
            <div className="first">
              <span className="label">Bravo tu es premier !</span>
              <FridayCoinsGains variation={30000} />
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
