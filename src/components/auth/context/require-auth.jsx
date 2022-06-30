import { Navigate, useLocation } from 'react-router-dom';
import { Path } from '../../../utils/types';
import { useAuth } from './use-auth';


export function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return <Navigate to={Path.LOGIN} state={{ from: location.pathname }} replace />
  console.log(`Autorized`);
  return children
}
