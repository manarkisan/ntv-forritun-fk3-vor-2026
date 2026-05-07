import { useAuth } from '@clerk/clerk-react';
import { ROUTES } from '@/navigation';
import { Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isSignedIn } = useAuth();
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to={ROUTES.login} replace state={{ from: location }} />;
  }

  return children;
}