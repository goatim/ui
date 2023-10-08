import { useMemo } from 'react';

export type RankingPodiumSize = 'small' | 'large';

interface RankingPodiumProps {
  size: RankingPodiumSize;
}

// TODO
export function RankingPodium({ size }: RankingPodiumProps): React.ReactElement {
  const iconSize = useMemo(() => (size === 'large' ? 72 : 64), [size]);

  return <div className={`goatim-ui-ranking-podium ${size}`}></div>;
}
