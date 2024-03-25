// import {JSX, useState} from 'react';
import {JSX} from 'react';
import CardInfo from '../../types/card-info.ts';
import Card from './card.tsx';

export default function CardsList({cards}: {cards: CardInfo[]}): JSX.Element {
  const createCards = () => (
    <>
      {cards.map((card) =>
        <Card key={card.id} cardInfo={card} />)}
    </>
  );

  //const [activeCardId, setActiveCardId] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {createCards()}
    </div>
  );
}
