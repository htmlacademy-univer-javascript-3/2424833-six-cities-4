import {JSX} from 'react';
import {Navigate} from 'react-router-dom';

type Props = {
  children: JSX.Element;
  isAuthorized: boolean;
}

export default function ProtectedRoute({children, isAuthorized}: Props): JSX.Element {
  return isAuthorized ? children : <Navigate to={'/login'} />;
}
