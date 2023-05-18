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
import { SearchInput } from './searchInput';
import { Select, SelectOption, Table, TableColumn } from '../general';
import { ClubThumbnail, LeagueThumbnail } from '../soccer';
import { AssetThumbnail } from '../trading';

export interface AssetsSearchFields extends FormFields {
  search?: string;
  league?: League;
  club?: Club;
  player_position?: PlayerPosition;
}

const columns: TableColumn<Asset>[] = [
  {
    key: 'asset',
    label: 'Joueur',
    cellComponent: ({ item }) =>
      item ? <AssetThumbnail asset={item} shape="text" showQuotation={false} /> : null,
  },
  { key: 'nb_shares', label: 'Act' },
  { key: 'quotation', label: 'Val' },
  { key: 'dividend', label: 'Div' },
];

export interface AssetsSearchProps extends FormProps<AssetsSearchFields> {
  getLeagues?: (query?: GetLeaguesQuery) => LeagueList | Promise<LeagueList>;
  getClubs?: (query?: GetClubsQuery) => ClubList | Promise<ClubList>;
  getAssets?: (query?: GetAssetsQuery) => AssetList | Promise<AssetList>;
}

export function AssetsSearch({ getLeagues, getClubs, getAssets }: AssetsSearchProps) {
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
      league: formState?.values?.league?.id,
    };
  }, [formState?.values?.league?.id]);

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

  const playerPositionsOptions = useMemo<SelectOption<PlayerPosition>[] | undefined>(() => {
    return [
      {
        value: 'forward',
        element: 'Attaquant',
      },
      {
        value: 'midfielder',
        element: 'Milieu',
      },
      {
        value: 'defender',
        element: 'Défenseur',
      },
      {
        value: 'goalkeeper',
        element: 'Gardien',
      },
    ];
  }, []);

  const [assets, setAssets] = useState<Asset[] | undefined>();

  const getAssetsQuery = useMemo<GetAssetsQuery>(() => {
    return {
      search: formState?.values?.search,
      league: formState?.values?.league?.id,
      club: formState?.values?.club?.id,
      player_position: formState?.values?.player_position,
    };
  }, [
    formState?.values?.search,
    formState?.values?.club?.id,
    formState?.values?.league?.id,
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
    <Form<AssetsSearchFields> ref={formRef} className="goatim-ui-assets-search">
      <div className="search">
        <Field name="search" component={SearchInput} />
      </div>
      <div className="filters">
        <div className="filter">
          <Field<League | undefined>
            name="league"
            component={Select<League | undefined>}
            shape="round"
            placeholder="Ligue"
            options={leaguesOptions}
          />
        </div>
        <div className="filter">
          <Field<Club | undefined>
            name="club"
            component={Select<Club | undefined>}
            shape="round"
            placeholder="Club"
            options={clubsOptions}
          />
        </div>
        <div className="filter">
          <Field<PlayerPosition | undefined>
            name="player_position"
            component={Select<PlayerPosition | undefined>}
            shape="round"
            placeholder="Poste"
            options={playerPositionsOptions}
          />
        </div>
      </div>

      <div className="results">
        <Table<Asset> columns={columns} items={assets} />
      </div>
    </Form>
  );
}
