import { Field, Form, FormContext, FormFields, FormProps, FormState } from '@cezembre/forms';
import {
  Asset,
  AssetList,
  Club,
  ClubList,
  GetAssetsQuery,
  GetClubsQuery,
  GetLeaguesQuery,
  League,
  LeagueList,
  PlayerPosition,
} from '@goatim/client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import isPromise from 'is-promise';
import {
  Input,
  Select,
  SelectOption,
  SelectProps,
  Table,
  TableColumn,
  TableColumnSort,
} from '../general';
import { ClubThumbnail, LeagueThumbnail } from '../soccer';
import { AssetThumbnail } from '../trading';
import { GoatimCoinsAmount, GoatimCoinsGains } from '../market';

export interface AssetsSearchFields extends FormFields {
  search?: string;
  league?: League[];
  club?: Club[];
  player_position?: PlayerPosition[];
}

export type AssetSearchSize = 'small' | 'medium' | 'large';

export interface AssetsSearchProps extends FormProps<AssetsSearchFields> {
  getLeagues?: (query?: GetLeaguesQuery) => LeagueList | Promise<LeagueList>;
  getClubs?: (query?: GetClubsQuery) => ClubList | Promise<ClubList>;
  getAssets?: (query?: GetAssetsQuery) => AssetList | Promise<AssetList>;
  onClickAsset?: (asset: Asset) => unknown;
  size?: AssetSearchSize;
}

export function AssetsSearch({
  getLeagues,
  getClubs,
  getAssets,
  onClickAsset,
  size = 'small',
}: AssetsSearchProps) {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-assets-search', size];

    return classNames.join(' ');
  }, [size]);

  const [formState, setFormState] = useState<FormState<AssetsSearchFields> | undefined>();

  const formRef = useCallback((formContext: FormContext<AssetsSearchFields> | null) => {
    if (formContext?.formState) {
      setFormState(formContext?.formState);
    }
  }, []);

  const [leagues, setLeagues] = useState<League[] | undefined>();

  useEffect(() => {
    (async () => {
      if (getLeagues) {
        let res = getLeagues();
        if (isPromise(res)) {
          res = await res;
        }
        setLeagues(res.leagues);
      }
    })();
  }, [getLeagues]);

  const leaguesOptions = useMemo<SelectOption<League>[] | undefined>(() => {
    return leagues?.map((league) => ({
      value: league,
      element: <LeagueThumbnail league={league} />,
    }));
  }, [leagues]);

  const [clubs, setClubs] = useState<Club[] | undefined>();

  const getClubsQuery = useMemo<GetClubsQuery>(() => {
    return {
      league: formState?.values?.league?.map((l) => l.id),
    };
  }, [formState?.values?.league]);

  useEffect(() => {
    (async () => {
      if (getClubs) {
        let res = getClubs(getClubsQuery);
        if (isPromise(res)) {
          res = await res;
        }
        setClubs(res.clubs);
      }
    })();
  }, [getClubs, getClubsQuery]);

  const clubsOptions = useMemo<SelectOption<Club>[] | undefined>(() => {
    return clubs?.map((club) => ({
      value: club,
      element: <ClubThumbnail club={club} />,
    }));
  }, [clubs]);

  const playerPositionsOptions = useMemo<SelectOption<PlayerPosition>[]>(() => {
    return [
      {
        value: 'forward',
        label: 'Attaquant',
      },
      {
        value: 'midfielder',
        label: 'Milieu',
      },
      {
        value: 'defender',
        label: 'Défenseur',
      },
      {
        value: 'goalkeeper',
        label: 'Gardien',
      },
    ];
  }, []);

  const [assetColumnSorted, setAssetColumnSorted] = useState<TableColumnSort | undefined>();
  const [nbSharesColumnSorted, setNbSharesColumnSorted] = useState<TableColumnSort | undefined>();
  const [quotationColumnSorted, setQuotationColumnSorted] = useState<TableColumnSort | undefined>();
  const [averageDividendsAmountColumnSorted, setAverageDividendsAmountColumnSorted] = useState<
    TableColumnSort | undefined
  >();

  const columns = useMemo<TableColumn<Asset>[]>(() => {
    return [
      {
        key: 'asset',
        label: 'Joueur',
        cellComponent: ({ item }) => (
          <AssetThumbnail asset={item} shape="text" showQuotation={false} />
        ),
        sortable: true,
        sorted: assetColumnSorted,
        onSort: setAssetColumnSorted,
      },
      {
        key: 'nb_shares',
        label: 'Act',
        sortable: true,
        sorted: nbSharesColumnSorted,
        onSort: setNbSharesColumnSorted,
        hidden: true,
      },
      {
        key: 'quotation',
        label: 'Val',
        sortable: true,
        sorted: quotationColumnSorted,
        onSort: setQuotationColumnSorted,
        cellComponent: ({ item }) => <GoatimCoinsAmount amount={item.quotation} />,
        align: 'right',
      },
      {
        key: 'average_dividends_amount',
        label: 'Div',
        sortable: true,
        sorted: averageDividendsAmountColumnSorted,
        onSort: setAverageDividendsAmountColumnSorted,
        cellComponent: ({ item }) => <GoatimCoinsGains gains={item.average_dividends_amount} />,
        hidden: size === 'small',
        align: 'right',
      },
    ];
  }, [
    size,
    assetColumnSorted,
    averageDividendsAmountColumnSorted,
    nbSharesColumnSorted,
    quotationColumnSorted,
  ]);

  const [assets, setAssets] = useState<Asset[] | undefined>();

  const getAssetsQuery = useMemo<GetAssetsQuery>(() => {
    const orders: string[] = [];

    if (assetColumnSorted) {
      orders.push(`player.last_name:${assetColumnSorted}`);
    }

    if (nbSharesColumnSorted) {
      orders.push(`nb_shares:${nbSharesColumnSorted}`);
    }

    if (quotationColumnSorted) {
      orders.push(`quotation:${quotationColumnSorted}`);
    }

    if (averageDividendsAmountColumnSorted) {
      orders.push(`average_dividends_amount:${averageDividendsAmountColumnSorted}`);
    }

    return {
      type: 'player',
      search: formState?.values?.search,
      league: formState?.values?.league?.map((l) => l.id),
      club: formState?.values?.club?.map((c) => c.id),
      player_position: formState?.values?.player_position,
      order: orders.join(','),
    };
  }, [
    assetColumnSorted,
    nbSharesColumnSorted,
    quotationColumnSorted,
    averageDividendsAmountColumnSorted,
    formState?.values?.search,
    formState?.values?.league,
    formState?.values?.club,
    formState?.values?.player_position,
  ]);

  useEffect(() => {
    (async () => {
      if (getAssets) {
        let res = getAssets(getAssetsQuery);
        if (isPromise(res)) {
          res = await res;
        }
        setAssets(res.assets);
      }
    })();
  }, [getAssets, getAssetsQuery, getClubsQuery]);

  return (
    <Form<AssetsSearchFields> ref={formRef} className={className}>
      <div className="search">
        <Field name="search" component={Input} shape="rounded" leftIcon="search" />
      </div>
      <div className="filters">
        <div className="filter">
          <Field<League[], SelectProps<League, League[]>>
            name="league"
            component={Select<League, League[]>}
            shape="round"
            placeholder="Ligue"
            options={leaguesOptions}
            canReset
            theme="electric-blue"
            multiple
            optionsPlural="ligues"
          />
        </div>
        <div className="filter">
          <Field<Club[], SelectProps<Club, Club[]>>
            name="club"
            component={Select<Club, Club[]>}
            shape="round"
            placeholder="Club"
            options={clubsOptions}
            canReset
            theme="electric-blue"
            multiple
            optionsPlural="clubs"
          />
        </div>
        <div className="filter">
          <Field<PlayerPosition[], SelectProps<PlayerPosition, PlayerPosition[]>>
            name="player_position"
            component={Select<PlayerPosition, PlayerPosition[]>}
            shape="round"
            placeholder="Poste"
            options={playerPositionsOptions}
            canReset
            theme="electric-blue"
            multiple
            optionsPlural="postes"
          />
        </div>
      </div>

      <div className="results">
        <Table<Asset>
          columns={columns}
          items={assets}
          onClickItem={onClickAsset ? (item) => onClickAsset(item) : undefined}
        />
      </div>
    </Form>
  );
}
