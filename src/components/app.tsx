import {JSX} from 'react';
import Main from './main/main.tsx';
import CardInfo from '../common/card-info.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './login/login.tsx';
import Favorites from './favorites/favorites.tsx';
import NotFound from './not-found/not-found.tsx';
import Offer from './offer/offer.tsx';
import ProtectedRoute from './protected-route/protected-route.tsx';
import Layout from './layout/layout.tsx';

export default function App(props: {cards: CardInfo[]}): JSX.Element {
  return (
  //TODO: layout Добавить футер в лейаут. Его нет в логине, обоих мейнах и оффере
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Main cards={props.cards} />} />
          <Route
            path={'favorites'}
            element={
              // FIXME: HistoryAPI strange behavior on redirect
              <ProtectedRoute>
                <Route element={<Favorites />} />
              </ProtectedRoute>
            }
          />
          <Route path={'offer/:id'} element={<Offer isAuthorized />}/>
          <Route path={'*'} element={<NotFound />} />
        </Route>
        {/*вынес для лейаута*/}
        <Route path={'login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
