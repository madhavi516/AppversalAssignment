import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => (await api.get('/users')).data);

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default usersSlice.reducer;
