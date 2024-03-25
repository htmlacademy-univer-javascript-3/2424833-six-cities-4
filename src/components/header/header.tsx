import {JSX} from 'react';
import HeaderLogo from './header-logo.tsx';
import {Link} from 'react-router-dom';

//export default function Header(props: {email: string; favoriteCount: number}): JSX.Element {
export default function Header({favoritesCount = 3} : {favoritesCount?: number}): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {/*TODO: заметна разница во времени между выделением жирным почты и количества при наведении*/}
                <Link className="header__nav-link header__nav-link--profile" to={'favorites'}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">{favoritesCount}</span>
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
