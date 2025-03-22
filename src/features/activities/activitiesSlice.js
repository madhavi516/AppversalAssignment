import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => (await api.get('/activities')).data);

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: { activities: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActivities.fulfilled, (state, action) => {
      state.activities = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default activitiesSlice.reducer;
