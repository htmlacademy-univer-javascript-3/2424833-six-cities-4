// import {JSX, useState} from 'react';
import {JSX} from 'react';
import CardInfo from '../../types/card-info.ts';
import Card from './card.tsx';
import Location from '../../types/location.ts';

type Props = {
  cards: CardInfo[];
  onListItemHover: (listPoint: Location) => void;
  listClassNames: string;
}

export default function CardsList({cards, onListItemHover, listClassNames}: Props): JSX.Element {
  const createCards = () => (
    <>
      {cards.map((card) =>
        <Card key={card.id} card={card} onListItemHover={onListItemHover} classPrefix={'cities'}/>)}
    </>
  );

  //const [activeCardId, setActiveCardId] = useState('');

  return (
    <div className={listClassNames}>
      {createCards()}
    </div>
  );
}
