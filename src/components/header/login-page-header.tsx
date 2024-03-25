import {JSX} from 'react';
import HeaderLogo from './header-logo.tsx';

export default function LoginPageHeader(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
        </div>
      </div>
    </header>
  );
}
