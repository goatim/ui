import { ReactElement, useCallback, useState } from 'react';
import { Asset, Portfolio } from '@goatim/client';
import { PlayerGrid, PlayerTable } from '@src/football/player';
import { DisplayMode, ToggleDisplayMode } from '@src/general/inputs';
import { TableColumnSort } from '@src/general/table';
import { UIDefaultSizes } from '../../utils';
import { PlayerListColumnSortedState } from './consts';

export interface PlayerListProps {
  items: Portfolio[];
  onClickAsset: (asset: Asset) => void;
  size?: UIDefaultSizes;
  isConnected?: boolean;
  defaultSort?: PlayerListColumnSortedState;
  defaultMode?: DisplayMode;
}

export function PlayerList({
  items,
  onClickAsset,
  size,
  isConnected,
  defaultSort,
  defaultMode,
}: PlayerListProps): ReactElement {
  const [columnSortState, setColumnSortState] = useState<PlayerListColumnSortedState>({});
  const [currDisplayMode, setCurrDisplayMode] = useState<DisplayMode>(
    defaultMode || DisplayMode.List,
  );

  const onToggleDisplayMode = useCallback(() => {
    setCurrDisplayMode(currDisplayMode === DisplayMode.List ? DisplayMode.Grid : DisplayMode.List);
  }, [currDisplayMode, setCurrDisplayMode]);

  const onColumnSorted = useCallback(
    (playerPropName: string, state: TableColumnSort) => {
      setColumnSortState((prev) => ({ ...prev, [playerPropName]: state }));
    },
    [setColumnSortState],
  );

  const onPlayerClicked = useCallback(() => {}, []);

  if (!items?.length) {
    return (
      <div className="goatim-ui-player-list">
        <span className="empty">Aucun joueur</span>
      </div>
    );
  }

  return (
    <div className="goatim-ui-player-list">
      {currDisplayMode === DisplayMode.List && (
        <div className="component player-table">
          <PlayerTable
            items={items?.map((x) => x.asset) as Asset[]}
            onPlayerClicked={onPlayerClicked}
            size={size}
            isConnected={isConnected}
            onColumnSorted={onColumnSorted}
          />
        </div>
      )}
      {currDisplayMode === DisplayMode.Grid && (
        <div className="component player-grid">
          <PlayerGrid
            items={items}
            onPlayerClicked={onPlayerClicked}
            size={size}
            isConnected={isConnected}
            onColumnSorted={onColumnSorted}
          />
        </div>
      )}
      <ToggleDisplayMode
        currentMode={currDisplayMode}
        onToggle={onToggleDisplayMode}
        className="floating"
      />
    </div>
  );
}
