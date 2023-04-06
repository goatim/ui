import { MouseEvent, ReactElement, useCallback, useMemo } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { CompositionPosition } from '@goatim/client/dist/soccer/compositions/model';
import { PlayerThumbnail } from '../players';
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

  const boosterLeverage = useMemo<number | undefined>(() => {
    if (compositionPosition.booster_leverage) {
      return compositionPosition.booster_leverage;
    }
    if (typeof compositionPosition.booster_factory === 'object') {
      return compositionPosition.booster_factory.leverage;
    }
    return undefined;
  }, [compositionPosition.booster_factory, compositionPosition.booster_leverage]);

  return (
    <div className={`goatim-ui-composition-position-thumbnail ${theme}`}>
      <Wrapper className="container" onClick={onClick}>
        {compositionPosition.player && typeof compositionPosition.player === 'object' ? (
          <PlayerThumbnail player={compositionPosition.player} theme={theme} />
        ) : null}
        {boosterLeverage ||
        compositionPosition.score ||
        compositionPosition.nb_shares ||
        compositionPosition.gains ? (
          <div className="metrics">
            {boosterLeverage ? (
              <div className="metric">
                <Tag theme={tagTheme} label={`pts x${boosterLeverage}`} />
              </div>
            ) : null}
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
                  theme={tagTheme}
                  label={`x${compositionPosition.nb_shares * (boosterLeverage || 1)}`}
                />
              </div>
            ) : null}
            {compositionPosition.gains ? (
              <div className="metric">
                <Tag theme={tagTheme}>
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
