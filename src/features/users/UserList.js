import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers } from './usersSlice';

const UserList = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(state => state.users);

  useEffect(() => { dispatch(fetchUsers()); }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <p key={user.id}>{user.name} - {user.points} Points</p>
      ))}
    </div>
  );
};

export default UserList;
