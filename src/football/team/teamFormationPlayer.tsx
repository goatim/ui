import { CompositionPosition, CompositionSettingPosition } from '@goatim/client';
import { useCallback, useMemo } from 'react';
import { PlayerFieldPosition } from '@src/football/player/PlayerFieldPosition';
import { UIDefaultSizes, UIDefaultThemes } from '../../utils';

interface TeamFormationPlayerProps {
  positionSettings: CompositionSettingPosition;
  positions: CompositionPosition[];
  playerFieldPositionSize?: UIDefaultSizes;
  theme: UIDefaultThemes;
  onPositionClick: (action: string, event?: React.MouseEvent) => void;
}

export function TeamFormationPlayer({
  positionSettings,
  positions,
  onPositionClick,
  playerFieldPositionSize = UIDefaultSizes.Medium,
  theme,
}: TeamFormationPlayerProps): React.ReactElement {
  const currPosition = useMemo(() => {
    if (positions?.length) {
      const positionIndex = positions.findIndex(
        (p: CompositionPosition) => p.id === positionSettings.id,
      );
      if (positionIndex !== -1) {
        return positions[positionIndex];
      }
    }
    return null;
  }, [positionSettings, positions]);

  const onItemClicked = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => onPositionClick('position', event),
    [onPositionClick],
  );

  if (currPosition) {
    return (
      <div
        className="goatim-ui-team-formation-player"
        id={currPosition.id || positionSettings.id}
        style={{
          left: `${(positionSettings.x || 0) * 100}%`,
          top: `${(positionSettings.y || 0) * 100}%`,
        }}>
        <PlayerFieldPosition
          position={currPosition}
          theme={theme}
          size={playerFieldPositionSize}
          onClick={onItemClicked}
        />
      </div>
    );
  }
  return (
    <PlayerFieldPosition theme={theme} size={playerFieldPositionSize} onClick={onItemClicked} />
  );
}
