import {JSX} from 'react';
import BookmarkButton from './bookmark-button.tsx';
import CardInfo from '../../types/card-info.ts';
import {Link} from 'react-router-dom';

export default function PlaceCardInfoChildren({cardInfo}: {cardInfo: CardInfo}): JSX.Element {
  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{cardInfo.price}</b>
          {' '}
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <BookmarkButton isInBookmarks={cardInfo.isFavorite} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          {/*//TODO: rating stars like in offer?*/}
          <span style={{width: `${20 * cardInfo.rating}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`offer/${cardInfo.id}`}>{cardInfo.title}</Link>
      </h2>
      {/*TODO: to upper*/}
      <p className="place-card__type">{cardInfo.type}</p>
    </>
  );
}
