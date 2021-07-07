import { ReactElement, ReactNode, useCallback } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Input, { Adapter, AutoComplete, Resolver, StyleType } from './input';
import Place, { newPlace } from '../utils/place';
import poweredByGoogle from '../assets/poweredByGoogle.png';
import { PredictionType, usePlaceDetailsGetter, usePlacePredictions } from '../utils/googleMaps';

type AutocompletePrediction = google.maps.places.AutocompletePrediction;
type GeocoderAddressComponent = google.maps.GeocoderAddressComponent;

const adapter: Adapter<Place | null | undefined> = (
  value: string | number,
): Place | null | undefined => {
  if (typeof value !== 'string' || !value.length) {
    return null;
  }
  return {
    ...newPlace(),
    value,
  };
};

const resolver: Resolver<Place | null | undefined> = (value: Place | null | undefined): string => {
  if (value && typeof value === 'object' && 'value' in value) {
    return value.value || '';
  }
  return '';
};

export interface PredictionProps {
  suggestion: AutocompletePrediction;
}

function Prediction({ suggestion }: PredictionProps): ReactElement {
  return (
    <p className="fleuraison-ui-place-prediction">
      {suggestion.structured_formatting.main_text}
      <span className="secondary-text">, {suggestion.structured_formatting.secondary_text}</span>
    </p>
  );
}

function PredictionsFooter(): ReactElement {
  return (
    <div className="fleuraison-ui-place-predictions-footer">
      <img src={poweredByGoogle} alt="Powered by Google" />
    </div>
  );
}

export interface Props extends FieldComponentProps<Place | null | undefined> {
  predictionTypes?: PredictionType[];
  styleType?: StyleType | string | null;
  label?: string | null;
  placeholder?: string | null;
  instructions?: string | null;
  onSelectSuggestion?: ((place: Place) => void) | null;
  leftIcon?: ReactNode;
}

export default function PlaceField({
  value,
  initialValue,
  error,
  warning,
  isActive,
  hasChanged,
  isValid,
  visited,
  submitted,
  onFocus,
  name,
  onChange,
  onBlur,
  form,
  predictionTypes = [PredictionType.GEOCODE],
  styleType = StyleType.DEFAULT,
  label = null,
  placeholder = null,
  instructions = null,
  onSelectSuggestion = null,
  leftIcon = null,
}: Props): ReactElement {
  const predictions: AutocompletePrediction[] = usePlacePredictions(
    resolver(value),
    predictionTypes,
  );
  const placeDetailsGetter = usePlaceDetailsGetter();

  const selectPrediction = useCallback(
    async (prediction: AutocompletePrediction) => {
      try {
        const placeDetails = await placeDetailsGetter(prediction.place_id);

        const nextValue: Place = {
          ...newPlace(),
          value: `${prediction.structured_formatting.main_text}, ${prediction.structured_formatting.secondary_text}`,
          google_id: prediction.place_id,
          types: prediction.types,
          is_address: prediction.types.includes('street_address'),
          name: placeDetails.name,
        };

        if (placeDetails.geometry) {
          nextValue.geo_location = {
            latitude: placeDetails.geometry.location.lat(),
            longitude: placeDetails.geometry.location.lng(),
          };
        }

        if (placeDetails.address_components && placeDetails.address_components.length) {
          placeDetails.address_components.forEach((component: GeocoderAddressComponent) => {
            if (component.types.includes('locality')) {
              nextValue.locality = component.long_name;
            } else if (component.types.includes('neighborhood')) {
              nextValue.neighborhood = component.long_name;
            }
          });
        }
        onChange(nextValue);
        if (onSelectSuggestion) {
          onSelectSuggestion(nextValue);
        }
      } catch (e) {
        console.error(e);
        // TODO : Handle error
      }
    },
    [onChange, onSelectSuggestion, placeDetailsGetter],
  );

  return (
    <div className="fleuraison-ui-place">
      <Input<Place | null | undefined>
        name={name}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        form={form}
        label={label}
        placeholder={placeholder}
        autoComplete={AutoComplete.OFF}
        adapter={adapter}
        resolver={resolver}
        suggestions={predictions}
        SuggestionItem={Prediction}
        suggestionsKeyExtractor={(suggestion: AutocompletePrediction) => suggestion.place_id}
        suggestionsFooter={<PredictionsFooter />}
        onSelectSuggestion={selectPrediction}
        leftIcon={leftIcon}
        styleType={styleType}
        instructions={instructions}
        error={error}
        warning={warning}
        initialValue={initialValue}
        isActive={isActive}
        hasChanged={hasChanged}
        isValid={isValid}
        visited={visited}
        submitted={submitted}
      />
    </div>
  );
}
