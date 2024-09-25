import { configureStore } from '@reduxjs/toolkit'
import counterReducer2 from './FastwithTS/counterSlice2';


export const store = configureStore({
  reducer: {
    counter: counterReducer2,
  },
})

// สร้าง RootState และ AppDispatch types จาก store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
