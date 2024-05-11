import {JSX, memo} from 'react';
import CardInfo from '../../types/card-info.ts';
import Card from './card.tsx';
import Location from '../../types/location.ts';
import {useAppSelector} from '../../hooks';
import Spinner from '../on-load/spinner.tsx';
import {isOffersLoading} from '../../store/app-data/selectors.ts';
import {SortOrder, SortType} from '../../types/sort.ts';

type Props = {
  cards: CardInfo[];
  onListItemHover: (listPoint: Location) => void;
  listClassNames: string;
  sortType?: SortType;
  sortOrder?: SortOrder;
}

const sortCards = (cards: CardInfo[], type: SortType, order: SortOrder) => {
  if (type === SortType.Price) {
    const compareFunction: (a: CardInfo, b: CardInfo) => number = order === SortOrder.Descending
      ? (a, b) => b.price - a.price
      : (a, b) => a.price - b.price;
    return cards.toSorted(compareFunction);
  }

  if (type === SortType.Rating && order === SortOrder.Descending) {
    return cards.toSorted((a, b) => b.rating - a.rating);
  }

  return cards;
};

function CardsList({
  cards,
  onListItemHover,
  listClassNames,
  sortType = SortType.Popularity,
  sortOrder = SortOrder.Descending
}: Props): JSX.Element {
  const isLoading = useAppSelector(isOffersLoading);

  const createCards = () => (
    <>
      {sortCards(cards, sortType, sortOrder).map((card) =>
        <Card key={card.id} card={card} onListItemHover={onListItemHover} classPrefix={'cities'}/>)}
    </>
  );

  return (
    <div className={listClassNames}>
      {isLoading && <Spinner/>}
      {createCards()}
    </div>
  );
}

const MemoizedCardsList = memo(CardsList);
export default MemoizedCardsList;
