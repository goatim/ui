import { ReactElement } from 'react';
import { PhysicalEvent } from '@fridaygame/client';
import PhysicalEventThumbnail, { PhysicalEventThumbnailTheme } from './physicalEventThumbnail';

export interface Props {
  physicalEvents?: PhysicalEvent[];
  theme?: PhysicalEventThumbnailTheme;
}

export default function PhysicalEventList({ physicalEvents, theme = 'dark' }: Props): ReactElement {
  if (!physicalEvents?.length) {
    return <span>Pas d&eapos;événements</span>;
  }
  return (
    <div className="friday-ui-physical-event-list">
      {physicalEvents.map((physicalEvent) => (
        <div className="physical-event" key={physicalEvent.id}>
          <PhysicalEventThumbnail physicalEvent={physicalEvent} theme={theme} />
        </div>
      ))}
    </div>
  );
}
