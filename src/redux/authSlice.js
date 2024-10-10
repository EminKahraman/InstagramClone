import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profileImageUrl: '',
  username: '',
  password: '',
  firstName: '',
  city: '',
  gender: '',
  email: '',

  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfileImageUrl: (state, action) => {
      state.profileImageUrl = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setProfileImageUrl,
  setUsername,
  setPassword,
  setFirstName,
  setCity,
  setGender,
  setEmail,
  setUser,
} = authSlice.actions;
export default authSlice.reducer;
