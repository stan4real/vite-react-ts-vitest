import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from './types'
import { PASSWORD, USERNAME } from './secret'



export default function useApi (){

    const [users,setUsers] = useState<Users>([])
    const [isLoading, setIsLoading] = useState(false)
        
    const api = axios.create({
        auth:{
            username:USERNAME,
            password:PASSWORD
        }
    })
useEffect(() => {
    const fetchData =  async () =>{
        setIsLoading(true)
        try {
            const result = await api.get('/api/devices');
            (setUsers(result.data));
        } catch (err) {
            throw err
        } finally {
            setIsLoading(false)
        }}
    fetchData()
}, [])

    
    return {users, isLoading}
}

