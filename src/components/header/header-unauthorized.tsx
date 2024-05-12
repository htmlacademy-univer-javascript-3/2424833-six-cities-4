import {JSX} from 'react';
import HeaderLogo from './header-logo.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

export default function HeaderUnauthorized(): JSX.Element {
  //TODO: header color is gray instead of white for some reason
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
