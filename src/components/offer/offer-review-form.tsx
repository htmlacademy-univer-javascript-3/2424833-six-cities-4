import {ChangeEvent, JSX, useState} from 'react';
import StarInput from './star-input.tsx';

type reviewFormData = {
  rating: number;
  review: string;
}

export default function OfferReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<reviewFormData>({
    rating: 0,
    review: ''
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <StarInput defaultValue={5} id={'5-stars'} labelTitle={'perfect'} onChange={handleFieldChange}/>
        <StarInput defaultValue={4} id={'4-stars'} labelTitle={'good'} onChange={handleFieldChange}/>
        <StarInput defaultValue={3} id={'3-stars'} labelTitle={'not bad'} onChange={handleFieldChange}/>
        <StarInput defaultValue={2} id={'2-stars'} labelTitle={'badly'} onChange={handleFieldChange}/>
        <StarInput defaultValue={1} id={'1-star'} labelTitle={'terribly'} onChange={handleFieldChange}/>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}
