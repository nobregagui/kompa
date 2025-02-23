// store.ts
import { configureStore } from '@reduxjs/toolkit';
import patientsReducer from './patients'; 

export const store = configureStore({
  reducer: {
    patients: patientsReducer, 
  },
});
