import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchRewards = createAsyncThunk('rewards/fetchRewards', async () => (await api.get('/rewards')).data);

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState: { rewards: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRewards.fulfilled, (state, action) => {
      state.rewards = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default rewardsSlice.reducer;