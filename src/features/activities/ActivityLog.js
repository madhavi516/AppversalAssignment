import React from 'react';
import { useAppSelector } from '../../app/hooks';

const ActivityLog = () => {
  const { activities } = useAppSelector(state => state.activities);

  return (
    <div>
      <h2>Activity Log</h2>
      {activities.map(activity => (
        <p key={activity.id}>{activity.description} - {activity.points} Points</p>
      ))}
    </div>
  );
};

export default ActivityLog;