import { ReactElement } from 'react';
import { PhysicalEvent } from '@goatim/client';
import { PhysicalEventThumbnail, PhysicalEventThumbnailTheme } from './physicalEventThumbnail';

export interface PhysicalEventListProps {
  physicalEvents?: PhysicalEvent[];
  theme?: PhysicalEventThumbnailTheme;
}

export function PhysicalEventList({
  physicalEvents,
  theme = 'dark',
}: PhysicalEventListProps): ReactElement {
  if (!physicalEvents?.length) {
    return <span>Pas d&eapos;événements</span>;
  }
  return (
    <div className="goatim-ui-physical-event-list">
      {physicalEvents.map((physicalEvent) => (
        <div className="physical-event" key={physicalEvent.id}>
          <PhysicalEventThumbnail physicalEvent={physicalEvent} theme={theme} />
        </div>
      ))}
    </div>
  );
}
