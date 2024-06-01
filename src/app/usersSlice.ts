import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../utils/types'
import { RootState } from './store'

export const usersSlice = createSlice({
  name: 'users',
  initialState:[{}],
  reducers: {
    addUser:(state, action: PayloadAction<User>) => {
        const newUser = {
            id:action.payload.id,
            name:action.payload.name,
            status:action.payload.status,
            UID:action.payload.uniqueId
        }
        state.push(newUser)
    },
  }
})

export const {addUser} = usersSlice.actions
export const selectUser = (state:RootState) => state.users
export default usersSlice.reducer