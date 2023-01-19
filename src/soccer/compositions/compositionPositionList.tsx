import { ReactElement } from 'react';
import { Composition, CompositionPosition, CompositionSettingPosition } from '@fridaygame/client';
import CompositionPositionThumbnail from './compositionPositionThumbnail';

export type CompositionPositionListTheme = 'dark' | 'light';

export interface Props {
  theme?: CompositionPositionListTheme;
  composition?: Pick<Composition, 'goalkeeper' | 'positions'>;
  onPositionClick?: (position: CompositionSettingPosition | 'goalkeeper') => unknown;
  onPositionDelete?: (position: CompositionSettingPosition | 'goalkeeper') => unknown;
}

export default function CompositionPositionList({
  theme,
  composition,
  onPositionClick,
  onPositionDelete,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-composition-positions-list ${theme}`}>
      {composition?.goalkeeper && typeof composition?.goalkeeper === 'object' ? (
        <div className="position goal">
          <CompositionPositionThumbnail
            player={composition?.goalkeeper}
            theme={theme}
            onClick={onPositionClick ? () => onPositionClick('goalkeeper') : undefined}
            onDelete={onPositionDelete ? () => onPositionDelete('goalkeeper') : undefined}
          />
        </div>
      ) : null}
      {composition?.positions?.map((position: CompositionPosition) => (
        <div className="position" key={position.id}>
          {typeof position.player === 'object' ? (
            <CompositionPositionThumbnail
              player={position.player}
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
