import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.tsx';
import store from './store/store.ts';
import {checkAuthAction, fetchCardsAction} from './store/api-actions.ts';
import {Provider} from 'react-redux';

store.dispatch(checkAuthAction());
store.dispatch(fetchCardsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App/>
    </Provider>
  </React.StrictMode>
);
