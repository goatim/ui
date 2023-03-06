import { MouseEvent, ReactElement, useCallback, useMemo } from 'react';
import { Player } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { PlayerThumbnail } from '../players';
import { Icon, Score, Tag, TagTheme } from '../../general';
import { FridayCoinsGains } from '../../market';

export type CompositionPositionThumbnailTheme = 'dark' | 'light';

export interface CompositionPositionThumbnailProps extends WrapperProps {
  player?: Player;
  nbShares?: number;
  leverage?: number;
  score?: number;
  gains?: number;
  theme?: CompositionPositionThumbnailTheme;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => unknown;
}

export function CompositionPositionThumbnail({
  player,
  nbShares,
  leverage,
  score,
  gains,
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

  return (
    <div className={`friday-ui-composition-position-thumbnail ${theme}`}>
      <Wrapper className="container" onClick={onClick}>
        {player ? <PlayerThumbnail player={player} theme={theme} /> : null}
        {leverage || score || nbShares || gains ? (
          <div className="metrics">
            {leverage ? (
              <div className="metric">
                <Tag theme={tagTheme} label={`pts x${leverage}`} />
              </div>
            ) : null}
            {score ? (
              <div className="metric">
                <Tag theme={tagTheme}>
                  <Score theme={theme}>{score}</Score>
                </Tag>
              </div>
            ) : null}
            {nbShares ? (
              <div className="metric">
                <Tag
                  leftIcon="friday-coin"
                  theme={tagTheme}
                  label={`x${nbShares * (leverage || 1)}`}
                />
              </div>
            ) : null}
            {gains ? (
              <div className="metric">
                <Tag theme={tagTheme}>
                  <FridayCoinsGains>{gains}</FridayCoinsGains>
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
