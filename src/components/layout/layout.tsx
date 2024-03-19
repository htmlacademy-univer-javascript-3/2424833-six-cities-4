import {JSX} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../header/header.tsx';
import HeaderUnauthorized from '../header/header-unauthorized.tsx';

export default function Layout(): JSX.Element {
  const isAuthorized = false;
  return (
    <>
      {isAuthorized ? <Header /> : <HeaderUnauthorized />}
      <main>
        <Outlet/>
      </main>
    </>
  );
}
