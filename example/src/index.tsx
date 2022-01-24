import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from '@fridaygame/ui';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import App from './App';
import env from './env';

const loadedStripe = loadStripe(env.STRIPE_PUBLIC_API_KEY || '');

ReactDOM.render(
  <StrictMode>
    <Elements stripe={loadedStripe}>
      <BrowserRouter>
        <ModalContext>
          <App />
        </ModalContext>
      </BrowserRouter>
    </Elements>
  </StrictMode>,
  document.getElementById('root'),
);
