import { ReactElement } from 'react';
import {
  CompositionPosition,
  CompositionSetting,
  CompositionSettingPosition,
  Match,
} from '@goatim/client';
import { FootballField } from '../match/footballField';
import { UIDefaultThemes } from '../../utils';
import { TeamFormationPlayer } from './teamFormationPlayer';

export interface TeamFormationProps {
  match: Match;
  positions: CompositionPosition[];
  compositionSettings: CompositionSetting;
  onUserInteraction: (action: string) => void;
  theme?: UIDefaultThemes;
}

export function TeamFormation({
  match,
  positions,
  compositionSettings,
  onUserInteraction,
  theme = 'dark',
}: TeamFormationProps): ReactElement {
  return (
    <div className={`goatim-ui-team-formation ${theme}`}>
      <div className="container">
        <div className="field">
          <FootballField theme={theme} />
        </div>
        {compositionSettings?.positions?.map((positionSettings: CompositionSettingPosition) => (
          <TeamFormationPlayer
            key={positionSettings.id}
            positionSettings={positionSettings}
            theme={theme}
            positions={positions}
            playerFieldPositionSize="small"
            onPositionClick={onUserInteraction}
          />
        ))}
      </div>
    </div>
  );
}
