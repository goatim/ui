export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export function serializeGeoLocation(geoLocation: GeoLocation): string {
  return `${geoLocation.latitude},${geoLocation.longitude}`;
}

export function parseGeoLocation(geoLocation: string): GeoLocation | null {
  if (!geoLocation || !geoLocation.length) {
    return null;
  }
  const parts = geoLocation.split(',');
  if (parts.length !== 2) {
    return null;
  }
  const [latitude, longitude] = parts.map(parseFloat);

  return { latitude, longitude };
}
