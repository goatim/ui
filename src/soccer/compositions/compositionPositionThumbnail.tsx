import { MouseEvent, ReactElement, useCallback } from 'react';
import { Player } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { PlayerThumbnail } from '../players';
import { Icon } from '../../general';

export type CompositionPositionThumbnailTheme = 'dark' | 'light';

export interface CompositionPositionThumbnailProps extends WrapperProps {
  player?: Player;
  theme?: CompositionPositionThumbnailTheme;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => unknown;
}

export function CompositionPositionThumbnail({
  player,
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

  return (
    <div className={`friday-ui-composition-position-thumbnail ${theme}`}>
      <Wrapper className="player" onClick={onClick}>
        {player ? <PlayerThumbnail player={player} theme={theme} /> : null}
      </Wrapper>
      {onDelete ? (
        <button type="button" className="delete" onClick={deleteWrapper}>
          <Icon name="x" />
        </button>
      ) : null}
    </div>
  );
}
