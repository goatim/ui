import { ReactElement } from 'react';
import {
  CompositionPosition,
  CompositionSetting,
  CompositionSettingPosition,
} from '@goatim/client';
import { SoccerField } from './soccerField';
import { SoccerFieldPosition, SoccerFieldPositionSize } from './soccerFieldPosition';

export type CompositionPositionMapTheme = 'dark' | 'light';

export interface PositionProps {
  id?: string;
  theme?: CompositionPositionMapTheme;
  positions?: CompositionPosition[];
  soccerFieldPositionSize?: SoccerFieldPositionSize;
  onPositionClick?: () => void;
}

function Position({
  id,
  theme,
  positions,
  soccerFieldPositionSize = 'medium',
  onPositionClick,
}: PositionProps): ReactElement {
  if (positions?.length) {
    const positionIndex = positions.findIndex(
      (position: CompositionPosition) => position.id === id,
    );

    if (positionIndex !== -1) {
      const { player } = positions[positionIndex];

      if (player && typeof player === 'object') {
        return (
          <SoccerFieldPosition
            theme={theme}
            icon={player.club && typeof player.club === 'object' ? player.club.icon : null}
            firstName={player.first_name}
            lastName={player.last_name}
            size={soccerFieldPositionSize}
            onClick={onPositionClick}
          />
        );
      }
    }
  }

  return (
    <SoccerFieldPosition theme={theme} size={soccerFieldPositionSize} onClick={onPositionClick} />
  );
}

export interface CompositionPositionMapProps {
  theme?: CompositionPositionMapTheme;
  compositionSetting?: CompositionSetting;
  positions?: CompositionPosition[];
  soccerFieldPositionSize?: SoccerFieldPositionSize;
  onPositionClick?: (position: CompositionSettingPosition | 'goalkeeper') => unknown;
}

export function CompositionPositionMap({
  theme,
  compositionSetting,
  positions,
  soccerFieldPositionSize = 'medium',
  onPositionClick,
}: CompositionPositionMapProps): ReactElement {
  return (
    <div className={`goatim-ui-composition-positions-map ${theme}`}>
      <div className="container">
        <div className="field">
          <SoccerField theme={theme} />
        </div>
        {compositionSetting?.positions?.map((position: CompositionSettingPosition) => (
          <div
            className="position"
            key={position.id}
            style={{ left: `${(position.x || 0) * 100}%`, top: `${(position.y || 0) * 100}%` }}>
            <Position
              id={position.id}
              theme={theme}
              positions={positions}
              soccerFieldPositionSize={soccerFieldPositionSize}
              onPositionClick={
                onPositionClick
                  ? () => (position ? onPositionClick(position) : undefined)
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
