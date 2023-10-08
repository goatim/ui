import { ReactElement, useMemo } from 'react';
import { CompositionPosition, formatPlayerName, Player } from '@goatim/client';
import { Wrapper } from '@cezembre/fronts';
import { UIDefaultThemes } from '@src/utils';
import { Tag, TagTheme } from '@src/general';

export interface PlayerLineupListItemProps {
  compositionPosition: CompositionPosition;
  theme?: UIDefaultThemes;
}

export function PlayerLineupListItem({
  compositionPosition,
  theme = UIDefaultThemes.Light,
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
      <span className="position">{player?.resolved_short_position}</span>
      <span className="name">
        {player?.first_name || player?.last_name
          ? formatPlayerName(player?.first_name, player?.last_name)
          : null}
      </span>
      <span className="score">
        {compositionPosition.gains ? (
          <Tag theme={boostedTagTheme} leftIcon="money" label={String(compositionPosition.gains)} />
        ) : null}
      </span>
    </Wrapper>
  );
}
