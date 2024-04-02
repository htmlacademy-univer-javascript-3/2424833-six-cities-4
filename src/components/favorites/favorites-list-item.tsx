import {JSX} from 'react';
import CardInfo from '../../types/card-info.ts';
import FavoritesCard from './favorites-card.tsx';

export default function FavoritesListItem(props: {locationName: string; cards: CardInfo[]}): JSX.Element {
  const createCards = () => (
    <>
      {props.cards
        .filter((card) => card.isFavorite)
        .map((card) =>
          <FavoritesCard key={card.id} cardInfo={card}/>)}
    </>
  );

  if (props.cards.length === 0) {
    return (
      <>
      </>
    );
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{props.locationName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {createCards()}
      </div>
    </li>
  );
}
