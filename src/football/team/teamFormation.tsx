import { ReactElement } from 'react';
import {
  CompositionPosition,
  CompositionSetting,
  CompositionSettingPosition,
  Match,
} from '@goatim/client';
import { FootballField } from '../match/footballField';
import { UIDefaultSizes, UIDefaultThemes } from '../../utils';
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
  theme = UIDefaultThemes.Dark,
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
            playerFieldPositionSize={UIDefaultSizes.Small}
            onPositionClick={onUserInteraction}
          />
        ))}
      </div>
    </div>
  );
}
