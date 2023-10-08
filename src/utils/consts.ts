export enum UIDefaultSizes {
  None = 0,
  Small = 1,
  Medium = 2,
  Large = 3,
  Full = 4,
}

export const UISizeLabels = {
  [UIDefaultSizes.None]: 'none',
  [UIDefaultSizes.Small]: 'small',
  [UIDefaultSizes.Medium]: 'medium',
  [UIDefaultSizes.Large]: 'large',
  [UIDefaultSizes.Full]: 'full',
};

export enum UIDefaultThemes {
  Dark = 'dark',
  Light = 'light',
}

export enum UIUserInteractions {
  openMatchModal = 'openMatchModal',
}
