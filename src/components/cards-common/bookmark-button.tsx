import {JSX} from 'react';
import classNames from 'classnames';

export default function BookmarkButton({isInBookmarks}: {isInBookmarks: boolean}): JSX.Element {
  const className = classNames(
    'place-card__bookmark-button', {
      'place-card__bookmark-button--active': isInBookmarks
    },
    'button');

  return (
    <button className={className} type="button">
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isInBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
