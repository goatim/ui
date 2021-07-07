import { GeoLocation } from './geoLocation';

type GeocoderAddressComponent = google.maps.GeocoderAddressComponent;

export default interface Place {
  value: string;
  google_id: string | null;
  types: any[] | null;
  is_address: boolean;
  geo_location: GeoLocation | null;
  address_components: GeocoderAddressComponent | null;
  locality: string | null;
  neighborhood: string | null;
  name: string | null;
}

export function newPlace(): Place {
  return {
    value: '',
    google_id: null,
    types: null,
    is_address: false,
    geo_location: null,
    address_components: null,
    locality: null,
    neighborhood: null,
    name: null,
  };
}
