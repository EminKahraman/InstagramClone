import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileImageUrl: '',
  username: '',
  password: '',
  firstName: '',
  city: '',
  gender: '',
  email: '',
  selectedImages: [],
  bio: '',
  accountPrivacy: true,

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
    setSelectedImage: (state, action) => {
      state.selectedImages = action.payload;
    },
    setBio: (state, action) => {
      state.bio = action.payload;
    },
    setAccountPrivacy: (state, action) => {
      state.accountPrivacy = action.payload;
    },
  }
})

export const {
  setProfileImageUrl,
  setUsername,
  setPassword,
  setFirstName,
  setCity,
  setGender,
  setEmail,
  setSelectedImage,
  setBio,
  setAccountPrivacy,
  setUser,
} = authSlice.actions;
export default authSlice.reducer;
