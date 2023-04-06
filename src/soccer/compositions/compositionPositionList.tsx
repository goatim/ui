import { ReactElement } from 'react';
import { CompositionPosition, CompositionSettingPosition } from '@goatim/client';
import { CompositionPositionThumbnail } from './compositionPositionThumbnail';

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
      {compositionPositions?.map((compositionPosition: CompositionPosition) => (
        <div className="position" key={compositionPosition.id}>
          <CompositionPositionThumbnail
            compositionPosition={compositionPosition}
            theme={theme}
            onClick={
              onPositionClick
                ? () => (onPositionClick ? onPositionClick(compositionPosition) : undefined)
                : undefined
            }
            onDelete={onPositionDelete ? () => onPositionDelete(compositionPosition) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
