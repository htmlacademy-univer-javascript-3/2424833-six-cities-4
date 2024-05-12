import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getIsAuthorized} from '../../store/user-process/selectors.ts';
import {AppRoute} from '../../consts.ts';

export default function ProtectedRoute({children}: {children: JSX.Element}): JSX.Element {
  return useAppSelector(getIsAuthorized) ? children : <Navigate to={AppRoute.Login} />;
}
