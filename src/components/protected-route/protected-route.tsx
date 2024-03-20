import {JSX} from 'react';
import {Navigate} from 'react-router-dom';

export default function ProtectedRoute(props: {children: JSX.Element}): JSX.Element {
  const isAuthorized = false;

  return isAuthorized ? props.children : <Navigate to={'/login'} />;
}
