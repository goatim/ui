import { ReactElement, useMemo } from 'react';
import { PhysicalEvent } from '@fridaygame/client';
import { DateTimeThumbnail, DateTimeThumbnailTheme } from '../../general/dateTimeThumbnail';

export type PhysicalEventTimelineTheme = 'dark' | 'light';

export interface PhysicalEventTimelineProps {
  physicalEvent: PhysicalEvent;
  theme?: PhysicalEventTimelineTheme;
}

interface MilestoneProps {
  children?: ReactElement;
}

function Milestone({ children }: MilestoneProps): ReactElement {
  return (
    <div className="milestone">
      <div className="timeline" />
      <div className="content">{children}</div>
    </div>
  );
}

export function PhysicalEventTimeline({
  physicalEvent,
  theme = 'dark',
}: PhysicalEventTimelineProps): ReactElement {
  const dateTimeThumbnailTheme = useMemo<DateTimeThumbnailTheme>(() => {
    switch (theme) {
      case 'dark':
        return 'transparent-dark';
      default:
        return 'transparent-light';
    }
  }, [theme]);

  return (
    <div className={`friday-ui-physical-event-timeline ${theme}`}>
      <Milestone>
        <DateTimeThumbnail
          dateTime={physicalEvent.beginning}
          align="left"
          label="Début"
          theme={dateTimeThumbnailTheme}
        />
      </Milestone>
      {physicalEvent.sub_events?.map((subEvent) => (
        <Milestone key={subEvent.id}>
          <span>{subEvent.name}</span>
        </Milestone>
      ))}
      <Milestone>
        <DateTimeThumbnail
          dateTime={physicalEvent.end}
          align="left"
          label="Fin"
          theme={dateTimeThumbnailTheme}
        />
      </Milestone>
    </div>
  );
}
