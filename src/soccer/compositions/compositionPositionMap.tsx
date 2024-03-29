import { ReactElement } from 'react';
import {
  CompositionPosition,
  CompositionSetting,
  CompositionSettingPosition,
} from '@goatim/client';
import {
  SoccerFieldPosition,
  SoccerFieldPositionSize,
} from '@src/soccer/compositions/soccerFieldPosition';
import { FootballField } from '@src/football/match/footballField';
import { UIDefaultThemes } from '@src/utils';

export interface PositionProps {
  id: string;
  theme?: UIDefaultThemes;
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
      const position = positions[positionIndex];

      return (
        <SoccerFieldPosition
          position={position}
          theme={theme}
          size={soccerFieldPositionSize}
          onClick={onPositionClick}
        />
      );
    }
  }

  return (
    <SoccerFieldPosition theme={theme} size={soccerFieldPositionSize} onClick={onPositionClick} />
  );
}

export interface CompositionPositionMapProps {
  theme?: UIDefaultThemes;
  compositionSetting?: CompositionSetting;
  positions?: CompositionPosition[];
  soccerFieldPositionSize?: SoccerFieldPositionSize;
  onPositionClick?: (position: CompositionSettingPosition) => unknown;
}

export function CompositionPositionMap({
  theme,
  compositionSetting,
  positions,
  soccerFieldPositionSize = 'medium',
  onPositionClick,
}: CompositionPositionMapProps): ReactElement {
  const positionTheme =
    theme === UIDefaultThemes?.Light ? UIDefaultThemes.Dark : UIDefaultThemes.Dark;
  return (
    <div className={`goatim-ui-composition-positions-map ${theme}`}>
      <div className="container">
        <div className="field">
          <FootballField theme={theme} />
        </div>
        {compositionSetting?.positions?.map((position: CompositionSettingPosition) => (
          <div
            className="position"
            key={position.id}
            style={{ left: `${(position.x || 0) * 100}%`, top: `${(position.y || 0) * 100}%` }}>
            <Position
              id={position.id}
              theme={positionTheme}
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
