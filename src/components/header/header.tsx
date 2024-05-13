import {JSX, useEffect} from 'react';
import HeaderLogo from './header-logo.tsx';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getUser} from '../../store/user-process/selectors.ts';
import {AppRoute} from '../../consts.ts';
import HeaderUnauthorized from './header-unauthorized.tsx';
import {fetchFavoriteOffersAction} from '../../store/api-actions.ts';
import {logout} from '../../store/action.ts';

export default function Header(): JSX.Element {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  });

  if (!user) {
    return <HeaderUnauthorized/>;
  }

  const onSignOutClick = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img src={user.avatarUrl} alt='avatar' style={{borderRadius: '20px'}}/>
                  </div>
                  <span className="header__user-name user__name">{user.email}</span>
                  <span className="header__favorite-count">{user.favoritesCount}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" onClick={onSignOutClick}>
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
