import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { useScript, ScriptStatus } from '@cezembre/fronts';

type AutocompleteService = google.maps.places.AutocompleteService;
type PlacesService = google.maps.places.PlacesService;
type AutocompletePrediction = google.maps.places.AutocompletePrediction;
type PlaceResult = google.maps.places.PlaceResult;
type PlacesServiceStatus = google.maps.places.PlacesServiceStatus;

export function useGoogleMapsApi(googleApiKey: string): ScriptStatus {
  return useScript(
    `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`
  );
}

export function useAutocompleteService(): RefObject<AutocompleteService | null> {
  const autocompleteService = useRef<AutocompleteService | null>(null);

  useEffect(() => {
    if ('google' in window && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
  }, []);

  return autocompleteService;
}

type GetPlacePrediction = (input: string) => void;

export enum PredictionType {
  GEOCODE = 'geocode',
  ADDRESS = 'address',
  ESTABLISHMENT = 'establishment',
  LOCALITY = 'locality',
  SUBLOCALITY = 'sublocality',
  POSTAL_CODE = 'postal_code',
  COUNTRY = 'country',
  ADMINISTRATIVE_AREA_LEVEL_1 = 'administrative_area_level_1',
  ADMINISTRATIVE_AREA_LEVEL_2 = 'administrative_area_level_2',
}

export function usePlacePredictions(
  query?: string | number | null,
  types: PredictionType[] = [PredictionType.GEOCODE],
  country = 'fr',
  callback: ((result: AutocompletePrediction[]) => void) | null = null
): AutocompletePrediction[] {
  const autocompleteService = useAutocompleteService();

  const memoizedQuery = useRef<string | null | undefined>(undefined);
  const memoizedTypes = useRef<string[] | undefined>(undefined);
  const memoizedCountry = useRef<string | undefined>(undefined);

  const getPlacePredictionsDebounced =
    useRef<_.DebouncedFunc<GetPlacePrediction> | null>(null);

  const [predictions, setPredictions] = useState<AutocompletePrediction[]>([]);

  useEffect(() => {
    if (
      !_.isEqual(memoizedTypes.current, types) ||
      !_.isEqual(memoizedCountry.current, country)
    ) {
      memoizedTypes.current = types;
      memoizedCountry.current = country;

      const getPlacePrediction = (input: string): void => {
        if (!autocompleteService.current) {
          return; // TODO : Alert user
        }
        autocompleteService.current.getPlacePredictions(
          {
            input,
            types,
            componentRestrictions: {
              country,
            },
          },
          (result, status) => {
            if (
              status === google.maps.places.PlacesServiceStatus.OK &&
              result &&
              result.length > 0
            ) {
              setPredictions(result);
              if (callback) {
                callback(result);
              }
            } else {
              setPredictions([]);
              if (callback) {
                callback([]);
              }
            }
          }
        );
      };

      getPlacePredictionsDebounced.current = _.debounce(
        getPlacePrediction,
        500
      );
    }
  }, [autocompleteService, callback, country, types]);

  useEffect(() => {
    if (getPlacePredictionsDebounced && getPlacePredictionsDebounced.current) {
      if (query && typeof query === 'string' && query.length) {
        if (!_.isEqual(memoizedQuery.current, query)) {
          memoizedQuery.current = query;
          getPlacePredictionsDebounced.current(query);
        }
      } else {
        getPlacePredictionsDebounced.current.cancel();
        setPredictions([]);
      }
    }
  }, [query]);

  return predictions;
}

export function usePlacesService(): React.RefObject<PlacesService | null> {
  const placesService = useRef<PlacesService | null>(null);

  useEffect(() => {
    if ('google' in window && window.google) {
      placesService.current = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );
    }
  }, []);

  return placesService;
}

export function usePlaceDetails(
  placeId: string,
  callback: ((result: PlaceResult | null) => void) | null = null
): PlaceResult | null {
  const placesService = usePlacesService();

  const memoizedPlaceId = useRef<string | null>(null);
  const [placeDetails, setPlaceDetails] = useState<PlaceResult | null>(null);

  useEffect(() => {
    if (
      placesService.current &&
      placeId &&
      placeId.length &&
      memoizedPlaceId.current !== placeId
    ) {
      memoizedPlaceId.current = placeId;
      placesService.current.getDetails(
        { placeId },
        (result: PlaceResult, status: PlacesServiceStatus) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setPlaceDetails(result);
            if (callback) {
              callback(result);
            }
          } else {
            setPlaceDetails(null);
            if (callback) {
              callback(null);
            }
          }
        }
      );
    }
  }, [callback, placeId, placesService]);

  return placeDetails;
}

type PlaceDetailsGetter = (placeId: string) => Promise<PlaceResult>;

export function usePlaceDetailsGetter(): PlaceDetailsGetter {
  const placesService = usePlacesService();

  return useCallback<PlaceDetailsGetter>(
    (placeId: string) => {
      return new Promise((resolve, reject) => {
        if (!placesService.current) {
          reject(new Error('Google API not loaded'));
          return;
        }
        placesService.current.getDetails(
          { placeId },
          (result: PlaceResult, status: PlacesServiceStatus) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              resolve(result);
            } else {
              reject(new Error(`Google API error: ${status}`));
            }
          }
        );
      });
    },
    [placesService]
  );
}
