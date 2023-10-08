import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },

  extraReducers: {
    // fetch all contacts from db
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // when we add new contact to db
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // when delete contact from db
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
