import { MouseEvent, ReactElement } from 'react';
import { Player } from '@fridaygame/client';
import PlayerThumbnail from '../players/playerThumbnail';
import Icon from '../../general/icon';

export type CompositionPositionThumbnailTheme = 'dark' | 'light';

export interface Props {
  player?: Player;
  theme?: CompositionPositionThumbnailTheme;
  onPlayerClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export default function CompositionPositionThumbnail({
  player,
  theme,
  onPlayerClick,
  onDelete,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-composition-position-thumbnail ${theme}`}>
      {player ? <PlayerThumbnail player={player} onClick={onPlayerClick} theme={theme} /> : null}
      {onDelete ? (
        <button type="button" className="delete" onClick={onDelete}>
          <Icon name="x" />
        </button>
      ) : null}
    </div>
  );
}
