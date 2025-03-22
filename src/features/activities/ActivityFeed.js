import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchActivities } from './activitiesSlice';

const ActivityFeed = () => {
  const dispatch = useAppDispatch();
  const { activities } = useAppSelector(state => state.activities);

  useEffect(() => { dispatch(fetchActivities()); }, [dispatch]);

  return (
    <div>
      <h2>Activity Feed</h2>
      {activities.map(act => (
        <p key={act.id}>{act.description} (+{act.points} pts)</p>
      ))}
    </div>
  );
};

export default ActivityFeed;
