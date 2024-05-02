import {JSX} from 'react';
import Main from './main/main.tsx';
import CardInfo from '../types/card-info.ts';
import {Route, Routes} from 'react-router-dom';
import Login from './login/login.tsx';
import Favorites from './favorites/favorites.tsx';
import NotFound from './not-found/not-found.tsx';
import OfferPage from './offer/offer-page.tsx';
import ProtectedRoute from './protected-route/protected-route.tsx';
import Layout from './layout/layout.tsx';
import {reviews} from '../mocks/reviews.ts';
import {useAppSelector} from '../hooks';
import {AuthorizationStatus} from '../consts.ts';
import HistoryRouter from './history-route/history-route.tsx';
import browserHistory from '../browser-history.ts';
import {favorites} from '../mocks/favorites.ts';

export default function App(props: {favorites: CardInfo[]}): JSX.Element {
  const isAuthorized = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={'/'} element={<Layout isAuthorized={isAuthorized}/>}>
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
                isAuthorized={isAuthorized}
                offersNearby={favorites}
              />
            }
          />
        </Route>
        <Route path={'*'} element={<NotFound />} />
        {/*вынес для лейаута*/}
        <Route path={'login'} element={<Login />} />
      </Routes>
    </HistoryRouter>
  );
}
