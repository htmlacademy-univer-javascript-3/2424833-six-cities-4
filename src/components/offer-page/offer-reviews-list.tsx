import {JSX} from 'react';
import {Review} from '../../types/review.ts';
import OfferReview from './offer-review.tsx';

export default function OfferReviewsList({reviews}: {reviews: Review[]}): JSX.Element {
  const createReviews = () => (
    <>
      {reviews.map((review) =>
        <OfferReview key={review.id} review={review} />)}
    </>
  );

  return (
    <ul className="reviews__list">
      {createReviews()}
    </ul>
  );
}
