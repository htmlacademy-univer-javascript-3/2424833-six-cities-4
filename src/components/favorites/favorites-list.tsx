import {JSX} from 'react';
import CardInfo from '../../types/card-info.ts';
import _ from 'lodash';
import FavoritesListItem from './favorites-list-item.tsx';

function CreateListItems(cards: CardInfo[]) {
  const cardsGroupedByLocation = _.groupBy(cards, (card) => card.city.name);
  return (
    <>
      {_.map(cardsGroupedByLocation, (value, key) =>
        <FavoritesListItem key={key} locationName={key} cards={value} />)}
    </>
  );
}

export default function FavoritesList({cards}: {cards: CardInfo[]}): JSX.Element {
  return (
    <ul className="favorites__list">
      {CreateListItems(cards)}
    </ul>
  );
}
