import {JSX} from 'react';
import CardInfo from '../../types/card-info.ts';
import _ from 'lodash';
import FavoritesListItem from './favorites-list-item.tsx';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers, isFavoritesLoading} from '../../store/app-data/selectors.ts';
import Spinner from '../spinner/spinner.tsx';

function CreateListItems(cards: CardInfo[]) {
  const cardsGroupedByLocation = _.groupBy(cards, (card) => card.city.name);
  return (
    <>
      {_.map(cardsGroupedByLocation, (value, key) =>
        <FavoritesListItem key={key} locationName={key} cards={value} />)}
    </>
  );
}

export default function FavoritesList(): JSX.Element {
  const cards = useAppSelector(getFavoriteOffers);
  const isLoading = useAppSelector(isFavoritesLoading);

  return (
    <ul className="favorites__list">
      {isLoading && <Spinner/>}
      {CreateListItems(cards)}
    </ul>
  );
}
