import { ReactElement, useMemo } from 'react';
import { Composition, Match } from '@fridaygame/client';
import { Property } from 'csstype';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';
import beforeMatch from './assets/before-match.jpg';
import duringMatch from './assets/during-match.jpg';
import afterMatch from './assets/after-match.jpg';
import CompositionPodium from '../compositions/compositionPodium';

export interface Props {
  match: Match;
}

export default function MatchLive({ match }: Props): ReactElement {
  const content = useMemo<ReactElement | null>(() => {
    switch (match.status) {
      case 'created':
        return <span className="label">Match en préparation ...</span>;
      case 'open':
        return (
          <DateTimeThumbnail
            label="Coup d'envoi"
            dateTime={match.beginning}
            countdown
            align="center"
            theme="light"
          />
        );
      case 'ongoing':
        return (
          <DateTimeThumbnail
            label="Coup de sifflet final"
            dateTime={match.end}
            countdown
            align="center"
            theme="light"
          />
        );
      case 'passed':
      case 'closing':
        return <span className="label">Match terminé !</span>;
      case 'closed':
        if (match.podium) {
          return <CompositionPodium compositions={match.podium} theme="light" />;
        }
        return <span className="label">Match terminé !</span>;
      case 'cancelled':
        return <span className="label">Match annulé !</span>;
      default:
        return null;
    }
  }, [match.beginning, match.end, match.status, match.podium]);

  const backgroundImage = useMemo<Property.BackgroundImage>(() => {
    switch (match.status) {
      case 'created':
      case 'open':
        return `url(${beforeMatch})`;
      case 'ongoing':
        return `url(${duringMatch})`;
      case 'passed':
      case 'closing':
        return `url(${afterMatch})`;
      case 'closed':
      case 'cancelled':
      default:
        return '';
    }
  }, [match.status]);

  return (
    <div className={`friday-ui-match-live ${match.status}`} style={{ backgroundImage }}>
      {content}
    </div>
  );
}
