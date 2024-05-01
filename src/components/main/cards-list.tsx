import {JSX, memo} from 'react';
import CardInfo from '../../types/card-info.ts';
import Card from './card.tsx';
import Location from '../../types/location.ts';
import {useAppSelector} from '../../hooks';
import Spinner from '../on-load/spinner.tsx';
import {isOffersLoading} from '../../store/app-data/selectors.ts';

type Props = {
  cards: CardInfo[];
  onListItemHover: (listPoint: Location) => void;
  listClassNames: string;
}

function CardsList({cards, onListItemHover, listClassNames}: Props): JSX.Element {
  const isLoading = useAppSelector(isOffersLoading);

  const createCards = () => (
    <>
      {cards.map((card) =>
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
