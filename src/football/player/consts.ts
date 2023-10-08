import { TableColumnSort } from '../../general';

export enum PlayerListColumns {
  Asset = 'asset',
  Position = 'position',
  Quotation = 'quotation',
  AverageDividendsAmount = 'averageDividendsAmount',
  NbSharesInPortfolios = 'nbSharesInPortfolios',
}

export interface PlayerListColumnSortedState {
  [PlayerListColumns.Asset]?: TableColumnSort;
  [PlayerListColumns.Position]?: TableColumnSort;
  [PlayerListColumns.AverageDividendsAmount]?: TableColumnSort;
  [PlayerListColumns.NbSharesInPortfolios]?: TableColumnSort;
  [PlayerListColumns.Quotation]?: TableColumnSort;
}
