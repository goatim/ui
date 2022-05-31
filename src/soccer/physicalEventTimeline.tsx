import { ReactElement } from 'react';
import { PhysicalEvent } from '@fridaygame/client';
import Date from '../general/date';

export type PhysicalEventTimelineTheme = 'default' | 'light';

export interface Props {
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

export default function PhysicalEventTimeline({
  physicalEvent,
  theme = 'default',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-physical-event-timeline ${theme}`}>
      <Milestone>
        <Date date={physicalEvent.beginning} align="left" label="Début" theme={theme} />
      </Milestone>
      {physicalEvent.sub_events?.map((subEvent) => (
        <Milestone key={subEvent.id}>
          <span>{subEvent.name}</span>
        </Milestone>
      ))}
      <Milestone>
        <Date date={physicalEvent.end} align="left" label="Fin" theme={theme} />
      </Milestone>
    </div>
  );
}
