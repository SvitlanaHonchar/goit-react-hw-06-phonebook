import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: { value: '' },
  // Об'єкт редюсерів
  reducers: {
    setFilter(state, action) {
      //   console.log(action.payload);
      state.value = action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
