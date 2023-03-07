import { ReactElement } from 'react';
import { CompositionPosition, CompositionSettingPosition } from '@goatim/client';
import { CompositionPositionThumbnail } from './compositionPositionThumbnail';

export type CompositionPositionListTheme = 'dark' | 'light';

export interface CompositionPositionListProps {
  theme?: CompositionPositionListTheme;
  positions?: CompositionPosition[];
  onPositionClick?: (position: CompositionSettingPosition) => unknown;
  onPositionDelete?: (position: CompositionSettingPosition) => unknown;
}

export function CompositionPositionList({
  theme,
  positions,
  onPositionClick,
  onPositionDelete,
}: CompositionPositionListProps): ReactElement {
  return (
    <div className={`goatim-ui-composition-positions-list ${theme}`}>
      {positions?.map((position: CompositionPosition) => (
        <div className="position" key={position.id}>
          {typeof position.player === 'object' ? (
            <CompositionPositionThumbnail
              player={position.player}
              nbShares={position.nb_shares}
              leverage={position.leverage}
              gains={position.gains}
              score={position.score}
              theme={theme}
              onClick={
                onPositionClick
                  ? () => (position ? onPositionClick(position) : undefined)
                  : undefined
              }
              onDelete={onPositionDelete ? () => onPositionDelete(position) : undefined}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
