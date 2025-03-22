import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const RewardDetail = () => {
  const { id } = useParams();
  const reward = useAppSelector(state => state.rewards.rewards.find(r => r.id === parseInt(id)));

  if (!reward) return <div>Reward Not Found!</div>;

  return (
    <div>
      <h2>{reward.name}</h2>
      <p>Points Required: {reward.points}</p>
    </div>
  );
};

export default RewardDetail;
