import {JSX} from 'react';

export default function BookmarkButton({isInBookmarks}: {isInBookmarks: boolean}): JSX.Element {
  if (isInBookmarks) {
    return (
      <button
        className="place-card__bookmark-button place-card__bookmark-button--active button"
        type="button"
      >
        <svg className="place-card__bookmark-icon" width={18} height={19}>
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  }

  return (
    <button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
