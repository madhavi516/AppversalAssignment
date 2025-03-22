import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { logout } from './authSlice';

const Logout = () => {
  const dispatch = useAppDispatch();
  return <button onClick={() => dispatch(logout())}>Logout</button>;
};

export default Logout;