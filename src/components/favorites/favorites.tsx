import {JSX} from 'react';
import FavoritesFooter from './favorites-footer.tsx';
import FavoritesList from './favorites-list.tsx';
import {useAppSelector} from '../../hooks';
import {hasFavoriteOffers, isFavoritesLoading} from '../../store/app-data/selectors.ts';
import FavoritesEmpty from './favorites-empty.tsx';

export default function Favorites(): JSX.Element {
  const isEmpty = !useAppSelector(hasFavoriteOffers);
  const isLoading = useAppSelector(isFavoritesLoading);
  if (isEmpty && !isLoading) {
    return <FavoritesEmpty/>;
  }

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList />
          </section>
        </div>
      </main>
      <FavoritesFooter />
    </div>
  );
}
