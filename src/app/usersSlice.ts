import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../utils/types'
import { RootState } from './store'

const initialState:User[] = [
  {
    id:9,
    name:'Монтажник тест',
    uniqueId:'135079',
    status:'online',
    lastUpdate:'2024-07-01T17:38:23.247+00:00'
  },
  {
    id:2,
    name:'Тест',
    uniqueId:'550393',
    status:'offline',
    lastUpdate:'2023-11-27T07:47:46.000+00:00'
  }
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser:(state, action: PayloadAction<User>) => {
        const newUser = {
            id:action.payload.id,
            name:action.payload.name,
            status:action.payload.status,
            uniqueId:action.payload.uniqueId,
            lastUpdate:new Date().toISOString()
        }
        state.push(newUser)
    },
  }
})

export const {addUser} = usersSlice.actions
export const selectUser = (state:RootState) => state.users
export default usersSlice.reducer