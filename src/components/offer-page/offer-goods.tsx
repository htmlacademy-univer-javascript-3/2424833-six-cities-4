import {JSX} from 'react';

export default function OfferGoods({goods}: {goods: string[]}): JSX.Element {
  const createGoodsList = () => (
    <ul className="offer__inside-list">
      {goods.map((item) => <li key={item} className="offer__inside-item">{item}</li>)}
    </ul>
  );

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      {createGoodsList()}
    </div>
  );
}
