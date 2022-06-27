import { ReactElement, useMemo } from 'react';
import { PhysicalEvent } from '@fridaygame/client';
import PhysicalEventTimeline from './physicalEventTimeline';
import DividendList from '../../trading/dividends/dividendList';

export type PhysicalEventThumbnailTheme = 'default' | 'light';

export interface Props {
  physicalEvent: PhysicalEvent;
  theme?: PhysicalEventThumbnailTheme;
}

export default function PhysicalEventThumbnail({ physicalEvent, theme }: Props): ReactElement {
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
    <div className={`friday-ui-physical-event-thumbnail ${theme} ${physicalEvent.type || 'match'}`}>
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
