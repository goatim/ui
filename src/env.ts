import { env as defaultEnv, NativeEnv, Env as DefaultEnv } from '@cezembre/fronts';

export interface Env extends DefaultEnv {
  STRIPE_PUBLIC_API_KEY?: string;
}

export function parseEnv(): Env {
  const processEnv = process.env as unknown as NativeEnv;
  const windowEnv: NativeEnv = 'env' in window && window.env ? (window.env as NativeEnv) : {};

  const env: Env = defaultEnv;

  if ('STRIPE_PUBLIC_API_KEY' in windowEnv && windowEnv.STRIPE_PUBLIC_API_KEY !== undefined) {
    env.STRIPE_PUBLIC_API_KEY = windowEnv.STRIPE_PUBLIC_API_KEY;
  } else if (
    'REACT_APP_STRIPE_PUBLIC_API_KEY' in processEnv &&
    processEnv.REACT_APP_STRIPE_PUBLIC_API_KEY !== undefined
  ) {
    env.STRIPE_PUBLIC_API_KEY = processEnv.REACT_APP_STRIPE_PUBLIC_API_KEY;
  }

  return env;
}

const env: Env = parseEnv();

export default env;
