import {JSX} from 'react';
import Main from './main/main.tsx';
import CardInfo from '../types/card-info.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './login/login.tsx';
import Favorites from './favorites/favorites.tsx';
import NotFound from './not-found/not-found.tsx';
import OfferPage from './offer/offer-page.tsx';
import ProtectedRoute from './protected-route/protected-route.tsx';
import Layout from './layout/layout.tsx';
import {reviews} from '../mocks/reviews.ts';
import {Provider} from 'react-redux';
import store from '../store/store.ts';

export default function App(props: {favorites: CardInfo[]}): JSX.Element {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<Main />} />
            <Route
              path={'favorites'}
              element={
                // FIXME: HistoryAPI strange behavior on redirect
                <ProtectedRoute>
                  <Route element={<Favorites cards={props.favorites}/>} />
                </ProtectedRoute>
              }
            />
            <Route
              path={'offer/:id'}
              element={
                <OfferPage
                  reviews={reviews}
                  isAuthorized
                />
              }
            />
          </Route>
          <Route path={'*'} element={<NotFound />} />
          {/*вынес для лейаута*/}
          <Route path={'login'} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
