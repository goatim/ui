import { MouseEvent, ReactElement, useCallback, useMemo } from 'react';
import { Player } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import PlayerThumbnail from '../players/playerThumbnail';
import Icon from '../../general/icon';

export type CompositionPositionThumbnailTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  player?: Player;
  theme?: CompositionPositionThumbnailTheme;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export default function CompositionPositionThumbnail({
  player,
  theme,
  onClick,
  onDelete,
}: Props): ReactElement {
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
