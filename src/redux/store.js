import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import messagesReducer from './messagesSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messagesReducer,
    profile: profileReducer,
  },
});
