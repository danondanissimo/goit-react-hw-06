import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactPeristConfig = {
  key: "contact",
  storage,
  whitelist: ["contacts"],
};

export const store = configureStore({
  reducer: {
    contact: persistReducer(contactPeristConfig, contactsReducer),
    filter: filtersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
