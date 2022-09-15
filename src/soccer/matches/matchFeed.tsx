import { ReactElement } from 'react';
import { Match, PhysicalEvent } from '@fridaygame/client';
import PhysicalEventList from '../physicalEvents/physicalEventList';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';

export type MatchFeedTheme = 'dark' | 'light';

export interface Props {
  match: Match;
  physicalEvents?: PhysicalEvent[];
  theme?: MatchFeedTheme;
}

export default function MatchFeed({ match, physicalEvents, theme = 'dark' }: Props): ReactElement {
  return (
    <div className={`friday-ui-match-feed ${theme}`}>
      <div className="beginning">
        <DateTimeThumbnail
          label="Coup d'envoi"
          dateTime={match.beginning}
          theme={theme}
          align="center"
          countdown
        />
      </div>

      {physicalEvents?.length ? (
        <div className="physical-events">
          <PhysicalEventList physicalEvents={physicalEvents} theme={theme} />
        </div>
      ) : null}

      <div className="end">
        <DateTimeThumbnail
          label="Coup de sifflet final"
          dateTime={match.end}
          theme={theme}
          align="center"
          countdown
        />
      </div>
    </div>
  );
}
