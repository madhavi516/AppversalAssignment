import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { login } from './authSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <select onChange={e => setRole(e.target.value)} value={role}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={() => dispatch(login({ user: username, role }))}>Login</button>
    </div>
  );
};

export default Login;