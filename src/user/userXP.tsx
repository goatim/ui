import { ReactElement, useMemo } from 'react';
import { League, User, Wallet } from '@goatim/client';
import { UIDefaultThemes } from '../utils';

export type UserProgressBarXPTheme = UIDefaultThemes;

export interface UserProgressBarXPProps {
  user: User;
  theme?: UserProgressBarXPTheme;
}

export function UserBadgeLevel({ level }: { level: number }): ReactElement {
  return (
    <div className="goatim-ui-user-badge-xp">
      <span>{level}</span>
    </div>
  );
}

export function UserProgressBarXP({ user, theme }: UserProgressBarXPProps): ReactElement {
  const fillXPWidth = useMemo(
    () => ({
      width: `${(Number(user.xpg) / 1200) * 100}%`,
    }),
    [],
  );

  return (
    <div className={`goatim-ui-user-progressbar-xp ${theme}`}>
      <UserBadgeLevel level={Number(user.level)} />
      <div className="xp-progress-bar">
        <div className="user-xp" style={fillXPWidth}>
          &nbsp;
        </div>
        <span className="xp-value">{Number(user.xpg)} / 1200 XPG</span>
      </div>
    </div>
  );
}
