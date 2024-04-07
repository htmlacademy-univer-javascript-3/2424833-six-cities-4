import {JSX} from 'react';
import Review from '../../types/review.ts';

function formatDate(date: Date): string {
  const timeFormat: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric'};
  return new Intl.DateTimeFormat('en-US', timeFormat).format(date);
}

export default function OfferReview({review}: {review: Review}): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${20 * review.rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date.toISOString().split('T')[0]}>
          {formatDate(review.date)}
        </time>
      </div>
    </li>
  );
}
