import {ChangeEventHandler, JSX} from 'react';

type starInput = {
  defaultValue: string;
  selectedValue: string;
  id: string;
  labelTitle: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}

export default function StarInput(props: starInput): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={props.defaultValue}
        id={props.id}
        type="radio"
        onChange={props.onChange}
        disabled={props.disabled}
        checked={props.selectedValue === props.defaultValue}
      />
      <label
        htmlFor={props.id}
        className="reviews__rating-label form__rating-label"
        title={props.labelTitle}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}
