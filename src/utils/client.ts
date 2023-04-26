import { useMemo } from 'react';

export type Device =
  | 'iphone'
  | 'android'
  | 'ipad'
  | 'ipod'
  | 'windows-phone'
  | 'blackberry'
  | 'webos';

export function getDevice(): Device | undefined {
  if (typeof navigator === 'undefined') {
    return undefined;
  }

  if (navigator.userAgent.match(/iPhone/i)) {
    return 'iphone';
  }
  if (navigator.userAgent.match(/Android/i)) {
    return 'android';
  }
  if (navigator.userAgent.match(/iPad/i)) {
    return 'ipad';
  }
  if (navigator.userAgent.match(/iPod/i)) {
    return 'ipod';
  }
  if (navigator.userAgent.match(/Windows Phone/i)) {
    return 'windows-phone';
  }
  if (navigator.userAgent.match(/BlackBerry/i)) {
    return 'blackberry';
  }
  if (navigator.userAgent.match(/webOS/i)) {
    return 'webos';
  }
  return undefined;
}

export type Browser = 'safari' | 'chrome' | 'firefox' | 'edge' | 'ie' | 'opera';

export function getBrowser(): Browser | undefined {
  if (typeof navigator === 'undefined') {
    return undefined;
  }

  if (navigator.userAgent.match(/Safari/i)) {
    return 'safari';
  }

  if (navigator.userAgent.match(/Chrome/i)) {
    return 'chrome';
  }

  if (navigator.userAgent.match(/Firefox/i)) {
    return 'firefox';
  }

  if (navigator.userAgent.match(/Edg/i)) {
    return 'edge';
  }

  if (navigator.userAgent.match(/MSIE/i)) {
    return 'ie';
  }

  if (navigator.userAgent.match(/Opera|OPR/i)) {
    return 'opera';
  }

  return undefined;
}

export interface Client {
  device?: Device;
  browser?: Browser;
}

export function getClient(): Client {
  return {
    device: getDevice(),
    browser: getBrowser(),
  };
}

export function useClient(): Client {
  return useMemo<Client>(() => {
    return getClient();
  }, []);
}
