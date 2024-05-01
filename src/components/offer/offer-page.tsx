import {JSX} from 'react';
import OfferReviewForm from './offer-review-form.tsx';
import OfferReviewsList from './offer-reviews-list.tsx';
import Map from '../main/map.tsx';
import CardsList from '../main/cards-list.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import OfferGallery from './offer-gallery.tsx';
import {useParams} from 'react-router-dom';
import {fetchOfferAction, fetchOffersNearbyAction, fetchReviewsAction} from '../../store/api-actions.ts';
import Spinner from '../on-load/spinner.tsx';
import OfferGoods from './offer-goods.tsx';
import HostInfo from './host-info.tsx';
import {getOffer, getOffersNearby, getReviews, isOfferPageDataLoading} from '../../store/app-data/selectors.ts';

const roundRating = (value: number) => value % 1 === 0.5 ? value : Math.round(value);

export default function OfferPage({isAuthorized}: {isAuthorized: boolean}): JSX.Element {
  const params = useParams();
  const id = params.id!;

  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const reviews = useAppSelector(getReviews);
  const isLoading = useAppSelector(isOfferPageDataLoading);

  if (offer === undefined || offer.id !== id) {
    dispatch(fetchOfferAction(id));
    dispatch(fetchOffersNearbyAction(id));
    dispatch(fetchReviewsAction(id));
  }

  if (!offer || isLoading) {
    return <Spinner />;
  }

  const points = offersNearby.map((card) => card.location).concat(offer.location);

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          {<OfferGallery images={offer.images.slice(0, 6)}/>}
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
                {isAuthorized && <OfferReviewForm offerId={id}/>}
              </section>
            </div>
          </div>
          <Map
            city={offer.city}
            points={points}
            selectedPoint={offer.location}
            mapClass={'offer__map map'}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList
              cards={offersNearby}
              onListItemHover={() => null}
              listClassNames={'near-places__list places__list'}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
