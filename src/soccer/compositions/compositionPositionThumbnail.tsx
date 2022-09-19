import { MouseEvent, ReactElement, useMemo } from 'react';
import { Player } from '@fridaygame/client';
import PlayerThumbnail from '../players/playerThumbnail';
import Icon from '../../general/icon';

export type CompositionPositionThumbnailTheme = 'dark' | 'light';

export interface Props {
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
  const readonly = useMemo<boolean>(() => {
    return !onClick && !onDelete;
  }, [onDelete, onClick]);

  return (
    <div
      className={`friday-ui-composition-position-thumbnail ${theme}${readonly ? ' readonly' : ''}`}>
      {player ? (
        <PlayerThumbnail player={player} onClick={!readonly ? onClick : undefined} theme={theme} />
      ) : null}
      {onDelete ? (
        <button type="button" className="delete" onClick={onDelete}>
          <Icon name="x" />
        </button>
      ) : null}
    </div>
  );
}
