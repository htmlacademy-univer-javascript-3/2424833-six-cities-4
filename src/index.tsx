import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.tsx';
import {favorites} from './mocks/favorites.ts';
import store from './store/store.ts';
import {fetchCardsAction} from './store/api-actions.ts';

store.dispatch(fetchCardsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App favorites={favorites}/>
  </React.StrictMode>
);
