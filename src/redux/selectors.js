import { createSelector, createSlice } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) =>
    items
      .filter(({ name, phone }) =>
        (name + phone).toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1))
);
