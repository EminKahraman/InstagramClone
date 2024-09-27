// src/slices/authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  profileImageUrl: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.profileImageUrl = action.payload.profileImageUrl;
    },
    logout: state => {
      state.username = '';
      state.profileImageUrl = '';
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
