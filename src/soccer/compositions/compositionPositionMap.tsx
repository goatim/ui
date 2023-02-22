import { ReactElement } from 'react';
import {
  Composition,
  CompositionPosition,
  CompositionSetting,
  CompositionSettingPosition,
} from '@fridaygame/client';
import { SoccerField } from './soccerField';
import { SoccerFieldPosition, SoccerFieldPositionSize } from './soccerFieldPosition';

export type CompositionPositionMapTheme = 'dark' | 'light';

export interface PositionProps {
  id?: string;
  theme?: CompositionPositionMapTheme;
  composition?: Pick<Composition, 'goalkeeper' | 'positions'>;
  soccerFieldPositionSize?: SoccerFieldPositionSize;
  onPositionClick?: () => void;
}

function Position({
  id,
  theme,
  composition,
  soccerFieldPositionSize = 'medium',
  onPositionClick,
}: PositionProps): ReactElement {
  if (composition?.positions?.length) {
    const positionIndex = composition.positions.findIndex(
      (position: CompositionPosition) => position.id === id,
    );

    if (positionIndex !== -1) {
      const { player } = composition.positions[positionIndex];

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
  composition?: Pick<Composition, 'goalkeeper' | 'positions'>;
  soccerFieldPositionSize?: SoccerFieldPositionSize;
  onPositionClick?: (position: CompositionSettingPosition | 'goalkeeper') => unknown;
}

export function CompositionPositionMap({
  theme,
  compositionSetting,
  composition,
  soccerFieldPositionSize = 'medium',
  onPositionClick,
}: CompositionPositionMapProps): ReactElement {
  return (
    <div className={`friday-ui-composition-positions-map ${theme}`}>
      <div className="container">
        <div className="field">
          <SoccerField theme={theme} />
        </div>
        <div className="position goal">
          <SoccerFieldPosition
            theme={theme}
            size={soccerFieldPositionSize}
            onClick={onPositionClick ? () => onPositionClick('goalkeeper') : undefined}
            icon={
              composition?.goalkeeper &&
              typeof composition.goalkeeper === 'object' &&
              composition.goalkeeper.club &&
              typeof composition.goalkeeper.club === 'object'
                ? composition.goalkeeper.club.icon
                : undefined
            }
            firstName={
              composition?.goalkeeper && typeof composition.goalkeeper === 'object'
                ? composition.goalkeeper.first_name
                : undefined
            }
            lastName={
              composition?.goalkeeper && typeof composition.goalkeeper === 'object'
                ? composition.goalkeeper.last_name
                : undefined
            }
          />
        </div>
        {compositionSetting?.positions?.map((position: CompositionSettingPosition) => (
          <div
            className="position"
            key={position.id}
            style={{ left: `${(position.x || 0) * 100}%`, top: `${(position.y || 0) * 100}%` }}>
            <Position
              id={position.id}
              theme={theme}
              composition={composition}
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
