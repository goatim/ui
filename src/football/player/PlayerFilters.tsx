import { Field, Form, FormContext, FormProps, FormState } from '@cezembre/forms';
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
import { UIDefaultSizes } from '@src/utils';
import { SelectOption, Input, SelectProps, Select } from '../../general';
import { LeagueThumbnail, ClubThumbnail } from '../../soccer';

export interface PlayerFiltersFields {
  search?: string;
  league?: League[];
  club?: Club[];
  player_position?: PlayerPosition[];
}

export interface PlayerFiltersProps extends FormProps<PlayerFiltersFields> {
  getLeagues?: (query?: GetLeaguesQuery) => LeagueList | Promise<LeagueList>;
  getClubs?: (query?: GetClubsQuery) => ClubList | Promise<ClubList>;
  getAssets?: (query?: GetAssetsQuery) => AssetList | Promise<AssetList>;
  getAssetsDefaultQuery?: GetAssetsQuery;
  onClickAsset?: (asset: Asset) => unknown;
  size?: UIDefaultSizes;
  connected?: boolean;
}

export function PlayerFilters({
  getLeagues,
  getClubs,
  getAssets,
  getAssetsDefaultQuery,
  onClickAsset,
  size = UIDefaultSizes.Small,
  connected,
}: PlayerFiltersProps) {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-player-filters', size];

    return classNames.join(' ');
  }, [size]);

  const [formState, setFormState] = useState<FormState<PlayerFiltersFields> | undefined>();

  const formRef = useCallback((formContext: FormContext<PlayerFiltersFields> | null) => {
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
      order: 'name:asc',
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

  const [assets, setAssets] = useState<Asset[] | undefined>();

  const getAssetsQuery = useMemo<GetAssetsQuery>(() => {
    const orders: string[] = [];

    // if (assetColumnSorted) {
    //   orders.push(`player.last_name:${assetColumnSorted}`);
    // }

    // if (connected && nbSharesInPortfoliosColumnSorted) {
    //   orders.push(`nb_shares_in_portfolios:${nbSharesInPortfoliosColumnSorted}`);
    // }

    // if (quotationColumnSorted) {
    //   orders.push(`quotation:${quotationColumnSorted}`);
    // }

    // if (averageDividendsAmountColumnSorted) {
    //   orders.push(`average_dividends_amount:${averageDividendsAmountColumnSorted}`);
    // }

    return {
      ...getAssetsDefaultQuery,
      search: formState?.values?.search,
      league: formState?.values?.league?.map((l) => l.id),
      club: formState?.values?.club?.map((c) => c.id),
      player_position: formState?.values?.player_position,
      order: orders.join(','),
    };
  }, [
    // assetColumnSorted,
    // connected,
    // nbSharesInPortfoliosColumnSorted,
    // quotationColumnSorted,
    // averageDividendsAmountColumnSorted,
    getAssetsDefaultQuery,
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
    <Form<PlayerFiltersFields> ref={formRef} className={className}>
      <div className="search">
        <Field
          name="search"
          component={Input}
          shape="rounded"
          leftIcon="search"
          placeholder="Rechercher un joueur..."
        />
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
    </Form>
  );
}
