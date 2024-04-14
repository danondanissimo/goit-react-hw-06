import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    selectContacts(state, action) {
      state.filters.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { selectContacts } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
