import { ReactElement, useMemo } from 'react';
import { User } from '@goatim/client';
import { UIDefaultThemes } from '../utils';

export type UserProgressBarXPTheme = UIDefaultThemes;

export interface UserProgressBarXPProps {
  user?: User;
  theme?: UserProgressBarXPTheme;
}

export function UserBadgeLevel({ level }: { level: number }): ReactElement {
  return (
    <div className="goatim-ui-user-badge-xp">
      <span>{level}</span>
    </div>
  );
}

// TODO add user xp
export function UserProgressBarXP({ user, theme }: UserProgressBarXPProps): ReactElement {
  const fillXPWidth = useMemo(
    () => ({
      width: `${(250 / 1200) * 100}%`,
    }),
    [],
  );

  return (
    <div className={`goatim-ui-user-progressbar-xp ${theme}`}>
      <UserBadgeLevel level={39} />
      <div className="xp-progress-bar">
        <div className="user-xp" style={fillXPWidth}>
          &nbsp;
        </div>
        <span className="xp-value">250/1200 XPG</span>
      </div>
    </div>
  );
}
