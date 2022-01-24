import { env as defaultEnv, NativeEnv, Env as DefaultEnv } from '@cezembre/fronts';

export interface Env extends DefaultEnv {
  GOOGLE_CLOUD_API_KEY?: string;
  STRIPE_PUBLIC_API_KEY?: string;
}

export function parseEnv(): Env {
  const processEnv = process.env as unknown as NativeEnv;
  const windowEnv: NativeEnv = window.env ? (window.env as NativeEnv) : {};

  const env: Env = defaultEnv;

  if (windowEnv.GOOGLE_CLOUD_API_KEY !== undefined) {
    env.GOOGLE_CLOUD_API_KEY = windowEnv.GOOGLE_CLOUD_API_KEY;
  } else if (processEnv.REACT_APP_GOOGLE_CLOUD_API_KEY !== undefined) {
    env.GOOGLE_CLOUD_API_KEY = processEnv.REACT_APP_GOOGLE_CLOUD_API_KEY;
  }

  if (windowEnv.STRIPE_PUBLIC_API_KEY !== undefined) {
    env.STRIPE_PUBLIC_API_KEY = windowEnv.STRIPE_PUBLIC_API_KEY;
  } else if (processEnv.REACT_APP_STRIPE_PUBLIC_API_KEY !== undefined) {
    env.STRIPE_PUBLIC_API_KEY = processEnv.REACT_APP_STRIPE_PUBLIC_API_KEY;
  }

  return env;
}

const env: Env = parseEnv();

export default env;
