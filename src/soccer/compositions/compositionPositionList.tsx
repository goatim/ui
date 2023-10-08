import { ReactElement } from 'react';
import { CompositionPosition, CompositionSettingPosition, Player } from '@goatim/client';
// import { CompositionPositionThumbnail } from '@src/soccer/compositions/compositionPositionThumbnail';
import { PlayerLineupListItem } from '@src/football/player';

export type CompositionPositionListTheme = 'dark' | 'light';

export interface CompositionPositionListProps {
  theme?: CompositionPositionListTheme;
  compositionPositions?: CompositionPosition[];
  onPositionClick?: (position: CompositionSettingPosition) => unknown;
  onPositionDelete?: (position: CompositionSettingPosition) => unknown;
}

export function CompositionPositionList({
  theme,
  compositionPositions,
  onPositionClick,
  onPositionDelete,
}: CompositionPositionListProps): ReactElement {
  return (
    <div className={`goatim-ui-composition-positions-list ${theme}`}>
      {compositionPositions
        ?.filter(
          (compositionPosition) =>
            compositionPosition.id || typeof compositionPosition.player === 'string',
        )
        .map((compositionPosition: CompositionPosition) => (
          <div
            className="position"
            key={compositionPosition.id || (compositionPosition.player as string)}>
            <PlayerLineupListItem compositionPosition={compositionPosition} />

            {/* <CompositionPositionThumbnail
              compositionPosition={compositionPosition}
              theme={theme}
              onClick={
                onPositionClick
                  ? () => (onPositionClick ? onPositionClick(compositionPosition) : undefined)
                  : undefined
              }
              onDelete={onPositionDelete ? () => onPositionDelete(compositionPosition) : undefined}
            /> */}
          </div>
        ))}
    </div>
  );
}
