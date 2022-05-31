import { ReactElement } from 'react';
import { PhysicalEvent } from '@fridaygame/client';

export type PhysicalEventTheme = 'default' | 'light';

export interface Props {
  physicalEvent: PhysicalEvent;
  theme?: PhysicalEventTheme;
}

export default function PhysicalEventThumbnail({ physicalEvent, theme }: Props): ReactElement {
  return (
    <div className={`friday-ui-physical-event-thumbnail ${theme}`}>
      <h1>Physical Event: {physicalEvent.name}</h1>
    </div>
  );
}
