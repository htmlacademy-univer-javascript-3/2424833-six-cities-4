import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

export default function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Offers}>На главную</Link>
    </>
  );
}
