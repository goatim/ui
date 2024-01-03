import { ReactElement, useMemo } from 'react';
import { CompositionPosition, formatPlayerName, Player } from '@goatim/client';
import { Wrapper } from '@cezembre/fronts';
import { UIDefaultSizes, UIDefaultThemes } from '@src/utils';
import { Tag, TagTheme } from '@src/general';

export interface PlayerLineupListItemProps {
  compositionPosition: CompositionPosition;
  theme?: UIDefaultThemes;
  size?: UIDefaultSizes;
  showMatchInfo?: boolean;
}

export function PlayerLineupListItem({
  compositionPosition,
  theme = UIDefaultThemes.Light,
  size = UIDefaultSizes.Small,
  showMatchInfo = true,
}: PlayerLineupListItemProps): ReactElement {
  const player: Player | null = useMemo(
    () => (typeof compositionPosition?.player === 'object' ? compositionPosition?.player : null),
    [compositionPosition],
  );

  const boostedTagTheme = useMemo<TagTheme>(() => {
    switch (theme) {
      case 'dark':
        return compositionPosition.booster_factory || compositionPosition.booster
          ? 'fushia'
          : 'light-medium-blue';
      case 'light':
      default:
        return compositionPosition.booster_factory || compositionPosition.booster
          ? 'fushia'
          : 'dark-white';
    }
  }, [compositionPosition.booster, compositionPosition.booster_factory, theme]);

  return (
    <Wrapper className="goatim-ui-player-lineup-list-item">
      <div className="player-info">
        <span className="position">
          {size > UIDefaultSizes.Medium
            ? player?.resolved_short_position
            : player?.resolved_short_position?.[0]}
        </span>
        <span className="name">
          {player?.first_name || player?.last_name
            ? formatPlayerName(player?.first_name, player?.last_name)
            : null}
        </span>
      </div>
      <div className="info">
        {
          /*compositionPosition.score && compositionPosition.gains*/ true && (
            <>
              <span className="score">
                {compositionPosition.gains ? (
                  <Tag
                    theme={boostedTagTheme}
                    leftIcon="money"
                    label={String(compositionPosition.gains)}
                  />
                ) : (
                  5
                )}
              </span>
              <span className="nb-shares">x{compositionPosition.nb_shares || 1}</span>
              <span> = </span>
              <span className="xpg">{compositionPosition.score || 0}XPG</span>
            </>
          )
        }
      </div>
    </Wrapper>
  );
}
