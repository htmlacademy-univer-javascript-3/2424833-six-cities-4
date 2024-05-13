import {JSX} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../header/header.tsx';
import HeaderUnauthorized from '../header/header-unauthorized.tsx';
import {useAppSelector} from '../../hooks';
import {getIsAuthorized} from '../../store/user-process/selectors.ts';

export default function Layout(): JSX.Element {
  return (
    <>
      {useAppSelector(getIsAuthorized) ? <Header /> : <HeaderUnauthorized />}
      <main>
        <Outlet/>
      </main>
    </>
  );
}
