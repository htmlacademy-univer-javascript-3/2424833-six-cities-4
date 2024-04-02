import {JSX} from 'react';
import FavoritesFooter from '../footer/favorites-footer.tsx';
import cardInfo from '../../types/card-info.ts';
import FavoritesList from './favorites-list.tsx';

export default function Favorites(props: {cards: cardInfo[]}): JSX.Element {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList cards={props.cards} />
          </section>
        </div>
      </main>
      <FavoritesFooter />
    </div>
  );
}
