import { ReactElement } from 'react';
import { Composition, CompositionPosition, CompositionSettingPosition } from '@fridaygame/client';
import CompositionPositionThumbnail from './compositionPositionThumbnail';

export type CompositionPositionListTheme = 'default' | 'light';

export interface Props {
  theme?: CompositionPositionListTheme;
  composition?: Pick<Composition, 'goalkeeper' | 'positions'>;
  onPositionClick?: (position: CompositionSettingPosition | string) => void;
}

export default function CompositionPositionList({
  theme,
  composition,
  onPositionClick,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-composition-positions-list ${theme}`}>
      {composition?.goalkeeper && typeof composition?.goalkeeper === 'object' ? (
        <div className="position goal">
          <CompositionPositionThumbnail
            player={composition?.goalkeeper}
            theme={theme}
            onPlayerClick={onPositionClick ? () => onPositionClick('goalkeeper') : undefined}
          />
        </div>
      ) : null}
      {composition?.positions?.map((position: CompositionPosition) => (
        <div className="position" key={position.id}>
          {typeof position.player === 'object' ? (
            <CompositionPositionThumbnail
              player={position.player}
              theme={theme}
              onPlayerClick={
                onPositionClick
                  ? () => (position ? onPositionClick(position) : undefined)
                  : undefined
              }
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
