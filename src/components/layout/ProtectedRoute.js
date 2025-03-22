import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const auth = useAppSelector(state => state.auth);
  if (!auth.isAuthenticated || (role && auth.role !== role)) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;