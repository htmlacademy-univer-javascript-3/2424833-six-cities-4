import {JSX} from 'react';
import Main from './main/main.tsx';
import {Route, Routes} from 'react-router-dom';
import Login from './login/login.tsx';
import Favorites from './favorites/favorites.tsx';
import NotFound from './not-found/not-found.tsx';
import ProtectedRoute from './protected-route/protected-route.tsx';
import Layout from './layout/layout.tsx';
import HistoryRouter from './history-route/history-route.tsx';
import browserHistory from '../browser-history.ts';
import {AppRoute} from '../consts.ts';
import OfferPage from './offer-page/offer-page.tsx';

export default function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Offers} element={<Layout/>}>
          <Route index element={<Main />} />
          <Route
            path={AppRoute.Favorites}
            element={
              // FIXME: HistoryAPI strange behavior on redirect
              <ProtectedRoute>
                <Favorites/>
              </ProtectedRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />}/>
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFound />} />
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </HistoryRouter>
  );
}
