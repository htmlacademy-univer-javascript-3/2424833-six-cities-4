import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.tsx';
import {favorites} from './mocks/favorites.ts';
import store from './store/store.ts';
import {checkAuthAction, fetchCardsAction} from './store/api-actions.ts';
import {Provider} from 'react-redux';

store.dispatch(fetchCardsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App favorites={favorites}/>
    </Provider>
  </React.StrictMode>
);
