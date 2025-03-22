import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Analytics = () => {
  const { users } = useAppSelector(state => state.users);

  return (
    <div>
      <h2>Analytics</h2>
      <BarChart width={500} height={300} data={users}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Bar dataKey="points" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Analytics;
