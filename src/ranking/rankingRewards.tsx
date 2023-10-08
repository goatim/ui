import { useMemo } from 'react';
import { Icon } from '../general';
import { UIDefaultSizes, UIDefaultThemes } from '../utils';

interface RankingRewardsProps {
  size: UIDefaultSizes;
  theme: UIDefaultThemes;
}

const RankingIconSize = {
  [UIDefaultSizes.Large]: 72,
  [UIDefaultSizes.Medium]: 64,
  [UIDefaultSizes.Small]: 48,
  [UIDefaultSizes.None]: 0,
};

export function RankingRewards({ size, theme }: RankingRewardsProps): React.ReactElement {
  const iconSize = useMemo(() => RankingIconSize[size], [size]);

  return (
    <div className={`goatim-ui-ranking-rewards ${size} ${theme}`}>
      <div className="icon-trophy">
        <Icon
          name="trophy"
          color={theme === UIDefaultThemes.Light ? 'gold' : 'white'}
          size={iconSize}
        />
      </div>
      <div className="rewards-list">
        <div>
          <span className="position">1er : </span>
          <span>0.003 ETH</span>
        </div>
        <div>
          <span className="position">2ème : </span>
          <span>30 GTC</span>
        </div>
        <div>
          <span className="position">3ème : </span>
          <span>10 GTC</span>
        </div>
      </div>
    </div>
  );
}
