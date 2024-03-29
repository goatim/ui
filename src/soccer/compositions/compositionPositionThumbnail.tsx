import { MouseEvent, ReactElement, useCallback, useMemo } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { CompositionPosition } from '@goatim/client/dist/soccer/compositions/model';
import { SoccerPlayerThumbnail } from '../players';
import { Icon, Score, Tag, TagTheme } from '../../general';
import { GoatimCoinsGains } from '../../market';

export type CompositionPositionThumbnailTheme = 'dark' | 'light';

export interface CompositionPositionThumbnailProps extends WrapperProps {
  compositionPosition: CompositionPosition;
  theme?: CompositionPositionThumbnailTheme;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => unknown;
}

export function CompositionPositionThumbnail({
  compositionPosition,
  theme,
  onClick,
  onDelete,
}: CompositionPositionThumbnailProps): ReactElement {
  const deleteWrapper = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (onDelete) {
        onDelete(event);
      }
    },
    [onDelete],
  );

  const tagTheme = useMemo<TagTheme>(() => {
    switch (theme) {
      case 'dark':
        return 'light-medium-blue';
      case 'light':
      default:
        return 'dark-white';
    }
  }, [theme]);

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

  const boosterLeverage = useMemo<number | undefined>(() => {
    if (
      compositionPosition.booster_factory &&
      typeof compositionPosition.booster_factory === 'object'
    ) {
      return compositionPosition.booster_factory.leverage;
    }
    if (compositionPosition.booster && typeof compositionPosition.booster === 'object') {
      return compositionPosition.booster.leverage;
    }
    return undefined;
  }, [compositionPosition.booster_factory, compositionPosition.booster]);

  return (
    <div className={`goatim-ui-composition-position-thumbnail ${theme}`}>
      <Wrapper className="container" onClick={onClick}>
        {compositionPosition.player && typeof compositionPosition.player === 'object' ? (
          <SoccerPlayerThumbnail player={compositionPosition.player} theme={theme} />
        ) : null}
        {boosterLeverage ||
        compositionPosition.score ||
        compositionPosition.nb_shares ||
        compositionPosition.gains ? (
          <div className="metrics">
            <div className="metric">
              <Tag theme={tagTheme} label="pts x1" />
            </div>
            {compositionPosition.score ? (
              <div className="metric">
                <Tag theme={tagTheme}>
                  <Score theme={theme}>{compositionPosition.score}</Score>
                </Tag>
              </div>
            ) : null}
            {compositionPosition.nb_shares ? (
              <div className="metric">
                <Tag
                  leftIcon="goatim-coin"
                  theme={boostedTagTheme}
                  label={`x${compositionPosition.nb_shares * (boosterLeverage || 1)}`}
                />
              </div>
            ) : null}
            {compositionPosition.gains ? (
              <div className="metric">
                <Tag theme={boostedTagTheme}>
                  <GoatimCoinsGains>{compositionPosition.gains}</GoatimCoinsGains>
                </Tag>
              </div>
            ) : null}
          </div>
        ) : null}
      </Wrapper>
      {onDelete ? (
        <button type="button" className="delete" onClick={deleteWrapper}>
          <Icon name="x" />
        </button>
      ) : null}
    </div>
  );
}
