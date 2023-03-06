import { ReactElement, useMemo } from 'react';
import { Tag } from '../../general';

export interface MatchParticipantsProps {
  nb_participants?: number;
}

export function MatchParticipants({ nb_participants }: MatchParticipantsProps): ReactElement {
  const label = useMemo<string>(() => {
    if (!nb_participants) {
      return 'Aucun participant';
    }
    if (nb_participants === 1) {
      return '1 participant';
    }
    return `${nb_participants} participants`;
  }, [nb_participants]);
  return <Tag size="medium" theme="full-electric-blue" label={label} />;
}
