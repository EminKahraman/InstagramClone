import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  participants: [],
  editedMessage: '',
  loading: false
};

const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setParticipants: (state, action) => {
      state.participants = action.payload;
    },
    setEditedMessage: (state, action) => {
      state.editedMessage = action.payload;
    },
    updateMessages: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setMessages,
  setParticipants,
  setEditedMessage,
  updateMessages,
  setLoading,
} = messagesSlice.actions;
export default messagesSlice.reducer;
