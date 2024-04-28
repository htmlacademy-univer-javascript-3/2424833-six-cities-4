import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../consts.ts';

export default function ProtectedRoute({children}: {children: JSX.Element}): JSX.Element {
  const isAuthorized = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;
  return isAuthorized ? children : <Navigate to={'/login'} />;
}
