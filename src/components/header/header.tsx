import {JSX} from 'react';
import HeaderLogo from './header-logo.tsx';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getUser} from '../../store/user-process/selectors.ts';

export default function Header(): JSX.Element {
  const user = useAppSelector(getUser);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={'favorites'}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {/*<img src={user.avatarUrl} alt='avatar'/>*/}
                  </div>
                  {/*TODO: email?*/}
                  <span className="header__user-name user__name">{user!.name}</span>
                  <span className="header__favorite-count">{3}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
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
