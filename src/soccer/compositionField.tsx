import { ReactElement } from 'react';
import { Composition, CompositionPosition, CompositionSetting } from '@fridaygame/client';
import SoccerField from './soccerField';
import SoccerFieldPosition, { SoccerFieldPositionSize } from './soccerFieldPosition';

export type CompositionFieldTheme = 'default' | 'light';

export interface PositionProps {
  id?: string;
  theme?: CompositionFieldTheme;
  composition?: Composition;
  soccerFieldPositionSize?: SoccerFieldPositionSize;
  onPositionClick?: (id: string) => unknown;
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

      if (player && typeof player === 'object' && player.club && typeof player.club === 'object') {
        return (
          <SoccerFieldPosition
            theme={theme}
            icon={player.club.icon}
            size={soccerFieldPositionSize}
            onClick={onPositionClick && id ? () => onPositionClick(id) : undefined}
          />
        );
      }
    }
  }

  return (
    <SoccerFieldPosition
      theme={theme}
      size={soccerFieldPositionSize}
      onClick={onPositionClick && id ? () => onPositionClick(id) : undefined}
    />
  );
}

export interface Props {
  theme?: CompositionFieldTheme;
  compositionSetting?: CompositionSetting;
  composition?: Composition;
  soccerFieldPositionSize?: SoccerFieldPositionSize;
  onPositionClick?: (id: string) => unknown;
}

export default function CompositionField({
  theme,
  compositionSetting,
  composition,
  soccerFieldPositionSize = 'medium',
  onPositionClick,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-composition-field ${theme}`}>
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
          />
        </div>
        {compositionSetting?.positions?.map((position) => (
          <div
            className="position"
            key={position.id}
            style={{ left: `${(position.x || 0) * 100}%`, top: `${(position.y || 0) * 100}%` }}>
            <Position
              id={position.id}
              theme={theme}
              composition={composition}
              soccerFieldPositionSize={soccerFieldPositionSize}
              onPositionClick={onPositionClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
