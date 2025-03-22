import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchRewards } from './rewardsSlice';

const RewardsList = () => {
  const dispatch = useAppDispatch();
  const { rewards } = useAppSelector(state => state.rewards);

  useEffect(() => { dispatch(fetchRewards()); }, [dispatch]);

  return (
    <div>
      <h2>Rewards</h2>
      {rewards.map(reward => (
        <p key={reward.id}>{reward.name} - {reward.points} Points</p>
      ))}
    </div>
  );
};

export default RewardsList;
