import { ReactElement } from 'react';
import { Match, PhysicalEvent } from '@goatim/client';
import { PhysicalEventList } from '../physicalEvents';
import { DateTimeThumbnail } from '../../general/dateTimeThumbnail';
import { Icon } from '../../general';

export type MatchFeedTheme = 'dark' | 'light';

export interface MatchFeedProps {
  match: Match;
  physicalEvents?: PhysicalEvent[];
  theme?: MatchFeedTheme;
}

export function MatchFeed({ match, physicalEvents, theme = 'dark' }: MatchFeedProps): ReactElement {
  return (
    <div className={`goatim-ui-match-feed ${theme}`}>
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
      ) : (
        <div className="no-events">
          <Icon name="meh" size={25} />
          <span>Aucun événement pour le moment</span>
        </div>
      )}

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
