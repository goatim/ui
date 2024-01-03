import { useCallback } from 'react';
import { Button } from '@src/general/button';

interface SwitchRankingLeagueProps {
  currentMode: RankingLeagueSwitchMode;
  onClickMode: (newMode: RankingLeagueSwitchMode) => void;
}

export enum RankingLeagueSwitchMode {
  Rookie = 1,
  Ultimate = 2,
}

export function SwitchRankingLeague({
  currentMode,
  onClickMode,
}: SwitchRankingLeagueProps): React.ReactElement {
  const onClickRookie = useCallback(() => {
    onClickMode(RankingLeagueSwitchMode.Rookie);
  }, [onClickMode]);

  const onClickUltimate = useCallback(() => {
    onClickMode(RankingLeagueSwitchMode.Ultimate);
  }, [onClickMode]);

  return (
    <div className="goatim-ui-switch-ranking-league">
      <Button
        className={currentMode === RankingLeagueSwitchMode.Rookie ? 'active' : 'default'}
        theme="transparent"
        onClick={onClickRookie}>
        Rookie
      </Button>

      <Button
        className={currentMode === RankingLeagueSwitchMode.Ultimate ? 'active' : 'default'}
        theme="transparent"
        onClick={onClickUltimate}>
        Ultimate
      </Button>
    </div>
  );
}
