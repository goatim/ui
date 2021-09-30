import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from '@fridaygame/ui';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ModalContext>
        <App />
      </ModalContext>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
