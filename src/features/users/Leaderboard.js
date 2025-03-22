import React from 'react';
import { useAppSelector } from '../../app/hooks';

const Leaderboard = () => {
  const { users } = useAppSelector(state => state.users);
  const sorted = [...users].sort((a, b) => b.points - a.points);

  return (
    <div>
      <h2>Leaderboard</h2>
      {sorted.map(user => (
        <p key={user.id}>{user.name}: {user.points} pts</p>
      ))}
    </div>
  );
};

export default Leaderboard;
