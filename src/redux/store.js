import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// Importă slice-urile care au fost create
import contactsSlice from "./contactSlice";
import authSlice from "./authSlice";

// Configurarea redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], 
};

// Combinarea reducerilor
const rootReducer = combineReducers({
  contacts: contactsSlice,
  auth: authSlice,
});

// Creează reducer-ul persistat
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurarea store-ului
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoră acțiunile generate de redux-persist
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

// Creează persistorul pentru redux-persist
export const persistor = persistStore(store);

export default store;
