import {JSX} from 'react';
import OfferGoods from './offer-goods.tsx';
import HostInfo from './host-info.tsx';
import OfferReviewsList from './offer-reviews-list.tsx';
import OfferReviewForm from './offer-review-form.tsx';
import Offer from '../../types/offer.ts';
import BookmarkButton from '../cards-common/bookmark-button.tsx';
import {useAppSelector} from '../../hooks';
import {getReviews} from '../../store/app-data/selectors.ts';
import {getIsAuthorized} from '../../store/user-process/selectors.ts';

const roundRating = (value: number) => value % 1 === 0.5 ? value : Math.round(value);

export default function OfferContainer({offer}: {offer: Offer}): JSX.Element {
  const isAuthorized = useAppSelector(getIsAuthorized);
  const reviews = useAppSelector(getReviews);

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {offer.isPremium && <div className="offer__mark"><span>Premium</span></div>}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {offer.title}
          </h1>
          <BookmarkButton isInBookmarks={offer.isFavorite}/>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{width: `${20 * roundRating(offer.rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">Apartment</li>
          <li className="offer__feature offer__feature--bedrooms">
            {offer.bedrooms} {offer.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
          </li>
          <li className="offer__feature offer__feature--adults">
            Max {offer.maxAdults} {offer.maxAdults === 1 ? 'adult' : 'adults'}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">€{offer.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <OfferGoods goods={offer.goods}/>
        <HostInfo user={offer.host} description={offer.description}/>
        <section className="offer__reviews reviews">
          <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <OfferReviewsList reviews={reviews
            .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 10)}
          />
          {isAuthorized && <OfferReviewForm offerId={offer.id}/>}
        </section>
      </div>
    </div>
  );
}
