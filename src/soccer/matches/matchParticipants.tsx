import { ReactElement, useMemo } from 'react';
import Tag from '../../general/tag';

export interface Props {
  nb_participants?: number;
}

export default function MatchParticipants({ nb_participants }: Props): ReactElement {
  const tag = useMemo<string>(() => {
    if (!nb_participants) {
      return 'Aucun participant';
    }
    if (nb_participants === 1) {
      return '1 participant';
    }
    return `${nb_participants} participants`;
  }, [nb_participants]);
  return <Tag>{tag}</Tag>;
}
