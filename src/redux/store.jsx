import { configureStore } from '@reduxjs/toolkit';
//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";
//=============== After ========================
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
