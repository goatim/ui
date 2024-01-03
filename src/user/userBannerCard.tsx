import { ReactElement } from 'react';
import { User } from '@goatim/client';
import { Card } from '../general/card';
import { UserProgressBarXP } from './userXP';
import { UserRankLeague } from './userRankLeague';

export interface UserBannerCardProps {
  user: User;
}

export function UserBannerCard({ user }: UserBannerCardProps): ReactElement {
  return (
    <Card className="goatim-ui-user-banner-card">
      <>
        <div className="username-rank">
          <span className="username">{user?.pseudo || user?.slug}</span>
          <span className="user-rank number-circle">
            7<span className="nth">ème</span>
          </span>
        </div>
        <div className="user-xp-progress-bar">
          <UserProgressBarXP user={user} />
        </div>
        <div className="user-rank-league">
          <UserRankLeague />
        </div>
      </>
    </Card>
  );
}
