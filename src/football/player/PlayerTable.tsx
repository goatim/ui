import { Asset, Player } from '@goatim/client';
import { useCallback, useMemo } from 'react';
import { Table, TableColumn, TableColumnSort } from '@src/general';
import { GoatimCoinsAmount, GoatimCoinsGains } from '@src/market';
import { AssetThumbnail } from '@src/trading';
import { UIDefaultSizes } from '@src/utils';
import { PlayerListColumnSortedState, PlayerListColumns } from './consts';

interface PlayerTableProps {
  items: Asset[];
  onPlayerClicked: (asset: Asset) => void;
  size?: UIDefaultSizes;
  isConnected?: boolean;
  currColumnsSort?: PlayerListColumnSortedState;
  onColumnSorted: (columnName: string, sortedState: TableColumnSort) => void;
}

export function PlayerTable({
  items,
  onPlayerClicked,
  size = UIDefaultSizes.Small,
  isConnected,
  currColumnsSort = {},
  onColumnSorted,
}: PlayerTableProps): React.ReactElement {
  const onAssetColumnSort = useCallback(
    (state: TableColumnSort) => {
      onColumnSorted(PlayerListColumns.Asset, state);
    },
    [onColumnSorted],
  );

  const onNbSharesInPortfoliosSort = useCallback(
    (state: TableColumnSort) => {
      onColumnSorted(PlayerListColumns.NbSharesInPortfolios, state);
    },
    [onColumnSorted],
  );

  const onQuotationColumnSort = useCallback(
    (state: TableColumnSort) => {
      onColumnSorted(PlayerListColumns.Quotation, state);
    },
    [onColumnSorted],
  );

  const onAverageDividendsAmountSort = useCallback(
    (state: TableColumnSort) => {
      onColumnSorted(PlayerListColumns.AverageDividendsAmount, state);
    },
    [onColumnSorted],
  );

  const columns = useMemo<TableColumn<Asset>[]>(() => {
    return [
      {
        key: 'asset',
        label: 'Joueur',
        cellComponent: ({ item }) => (
          <AssetThumbnail asset={item} shape="text" showQuotation={false} />
        ),
        sortable: true,
        sorted: currColumnsSort[PlayerListColumns.Asset],
        onSort: onAssetColumnSort,
        width: '33%',
      },
      {
        key: 'pos',
        label: 'Pos',
        cellComponent: ({ item }) => (
          <span className="position">{(item?.player as Player)?.resolved_short_position}</span>
        ),
        sortable: true,
        sorted: currColumnsSort[PlayerListColumns.Position],
        onSort: onAssetColumnSort,
        align: 'center',
      },
      {
        key: 'quotation',
        label: 'Val',
        sortable: true,
        sorted: currColumnsSort[PlayerListColumns.Quotation],
        onSort: onQuotationColumnSort,
        cellComponent: ({ item }) => <GoatimCoinsAmount amount={item.quotation} />,
        align: 'right',
      },
      {
        key: 'average_dividends_amount',
        label: 'Div',
        sortable: true,
        sorted: currColumnsSort[PlayerListColumns.AverageDividendsAmount],
        onSort: onAverageDividendsAmountSort,
        cellComponent: ({ item }) => <GoatimCoinsGains gains={item.average_dividends_amount} />,
        hidden: size === UIDefaultSizes.Small,
        align: 'right',
      },
      {
        key: 'nb_shares_in_portfolios',
        label: 'Act',
        sortable: true,
        sorted: currColumnsSort[PlayerListColumns.NbSharesInPortfolios],
        onSort: onNbSharesInPortfoliosSort,
        align: 'right',
        hidden: !isConnected,
      },
    ];
  }, [
    currColumnsSort,
    onAssetColumnSort,
    onQuotationColumnSort,
    onAverageDividendsAmountSort,
    size,
    onNbSharesInPortfoliosSort,
    isConnected,
  ]);

  return (
    <Table<Asset>
      columns={columns}
      items={items}
      onClickItem={onPlayerClicked ? (item) => onPlayerClicked(item) : undefined}
      className="goatim-ui-player-table"
    />
  );
}
