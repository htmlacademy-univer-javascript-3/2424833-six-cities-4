import {ChangeEvent, FormEvent, JSX, useState} from 'react';
import StarInput from './star-input.tsx';
import {useAppDispatch} from '../../hooks';
import {postReview} from '../../store/api-actions.ts';
import {REVIEW_COMMENT_MAX_LENGTH, REVIEW_COMMENT_MIN_LENGTH} from '../../consts.ts';

type reviewFormData = {
  rating: string;
  review: string;
}

const defaultFormData: reviewFormData = {
  rating: '0',
  review: ''
};

const createStarsInput = (
  formData: reviewFormData,
  handleFieldChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  isBlocked: boolean) => {

  const values = [
    {default: '5', id: '5-stars', label: 'perfect'},
    {default: '4', id: '4-stars', label: 'good'},
    {default: '3', id: '3-stars', label: 'not bad'},
    {default: '2', id: '2-stars', label: 'badly'},
    {default: '1', id: '1-star', label: 'terribly'}
  ];

  return (
    <>
      {values.map((value) => (
        <StarInput
          defaultValue={value.default}
          selectedValue={formData.rating}
          id={value.id}
          labelTitle={value.label}
          onChange={handleFieldChange}
          disabled={isBlocked}
          key={value.id}
        />))}
    </>
  );
};

export default function OfferReviewForm({offerId}: {offerId: string}): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<reviewFormData>(defaultFormData);

  const [isBlocked, setBlock] = useState(false);
  const resetForm = () => setFormData(defaultFormData);
  const unblockForm = () => setBlock(false);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(postReview({
      review:
        {
          comment: formData.review,
          rating: parseInt(formData.rating, 10)
        },
      offerId,
      resetForm,
      unblockForm
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {createStarsInput(formData, handleFieldChange, isBlocked)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        maxLength={REVIEW_COMMENT_MAX_LENGTH}
        disabled={isBlocked}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{REVIEW_COMMENT_MIN_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.review.length < REVIEW_COMMENT_MIN_LENGTH || formData.rating === '0' || isBlocked}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
