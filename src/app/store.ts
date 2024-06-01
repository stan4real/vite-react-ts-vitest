import { configureStore } from '@reduxjs/toolkit'
import usersSliceReducer from './usersSlice'

export const store = configureStore({
  reducer: {
    users:usersSliceReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']