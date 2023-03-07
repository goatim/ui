import { ReactElement, useMemo } from 'react';
import { PhysicalEvent } from '@goatim/client';
import { PhysicalEventTimeline } from './physicalEventTimeline';
import { DividendList } from '../../trading';

export type PhysicalEventThumbnailTheme = 'dark' | 'light';

export interface PhysicalEventThumbnailProps {
  physicalEvent: PhysicalEvent;
  theme?: PhysicalEventThumbnailTheme;
}

export function PhysicalEventThumbnail({
  physicalEvent,
  theme = 'dark',
}: PhysicalEventThumbnailProps): ReactElement {
  const resolvedType = useMemo<string>(() => {
    switch (physicalEvent.type) {
      case 'goal':
        return 'But';
      case 'match':
      default:
        return 'Match';
    }
  }, [physicalEvent.type]);

  return (
    <div className={`goatim-ui-physical-event-thumbnail ${theme} ${physicalEvent.type || 'match'}`}>
      <div className="header">
        <span className="type">{resolvedType}</span>
        <span className="name">{physicalEvent.name}</span>
      </div>
      <div className="timeline">
        <PhysicalEventTimeline physicalEvent={physicalEvent} theme={theme} />
      </div>
      {physicalEvent.dividends?.length ? (
        <div className="dividends">
          <DividendList dividends={physicalEvent.dividends} theme={theme} />
        </div>
      ) : null}
    </div>
  );
}
