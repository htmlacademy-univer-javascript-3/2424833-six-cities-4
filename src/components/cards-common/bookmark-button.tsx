import {JSX, useState} from 'react';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setOfferFavoriteStatus} from '../../store/api-actions.ts';
import {getIsAuthorized} from '../../store/user-process/selectors.ts';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

export default function BookmarkButton({offerId, isFavoriteOffer}: {offerId: string; isFavoriteOffer: boolean}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthorized = useAppSelector(getIsAuthorized);
  const [isInBookmarks, setIsInBookmarks] = useState(isFavoriteOffer);

  const handleClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    }
    // TODO: set new status for offer object so it won't reset on tabs switching
    dispatch(setOfferFavoriteStatus({
      offerId: offerId,
      newStatus: isInBookmarks ? 0 : 1,
      setIsFavorite: setIsInBookmarks, //TODO:  non-serializable value was detected in an action
      wasFavorite: isInBookmarks
    }));
  };

  const className = classNames(
    'place-card__bookmark-button', {
      'place-card__bookmark-button--active': isInBookmarks
    },
    'button');

  return (
    <button className={className} type="button" onClick={handleClick}>
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isInBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
