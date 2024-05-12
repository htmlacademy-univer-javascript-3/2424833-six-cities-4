import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

export default function HeaderLogo(): JSX.Element {
  return (
    <div className="header__left">
      {/* TODO header__logo-link--active?*/}
      <Link className="header__logo-link" to={AppRoute.Offers}>
        <img
          className="header__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={81}
          height={41}
        />
      </Link>
    </div>
  );
}
