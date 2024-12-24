import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/TodoSlice.jsx'

export const store = configureStore({
    reducer: todoReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false, // Disable serializability checks
      }),
})