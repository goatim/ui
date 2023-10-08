import { TableColumnSort } from '@src/general';
import { UIDefaultSizes } from '@src/utils';
import { Portfolio } from '@goatim/client';
import { PlayerListColumnSortedState } from './consts';
import { PlayerCard } from './PlayerCard';

interface PlayerGridProps {
  items: Portfolio[];
  onPlayerClicked: (item: Portfolio) => void;
  size?: UIDefaultSizes;
  isConnected?: boolean;
  currColumnsSort?: PlayerListColumnSortedState;
  onColumnSorted: (columnName: string, sortedState: TableColumnSort) => void;
}

export function PlayerGrid({
  items,
  onPlayerClicked,
  size,
  isConnected,
  currColumnsSort,
  onColumnSorted,
}: PlayerGridProps): React.ReactElement {
  return (
    <div className="goatim-ui-player-grid">
      {items.map((itm) => (
        <PlayerCard key={itm.id} item={itm} />
      ))}
    </div>
  );
}
