import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from './types'



export default function useApi (){

    const [users,setUsers] = useState<Users>([])
    const [isLoading, setIsLoading] = useState(false)
        
    const api = axios.create({
        auth:{
            username:'test@test.test',
            password:'123321'
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

    const postData = () =>{ axios.post('https://my-json-server.typicode.com/stan4real/data/legacy',
        {id:12,
        attributes:{},
        groupId:2,
        calendarId:2,
        name:'Stan',
        uniqueId:'',
        status:'waiting',
        lastUpdate:'2023-11-27T13:47:46.000+00:00',
        positionId:100000,
        phone:'9624225757',
        model:'model55',
        contact:'contactt',
        category:'truck',
        disabled:'true',
        expirationTime: null
        })
        .then(function (response) {
            alert('Success');
        }) 
        .catch(function (error) {
            alert(error);
        });
    }
    

    const deleteData = () =>{ axios.delete('https://my-json-server.typicode.com/stan4real/data/legacy',{}
        )
        .then(function (response) {
            console.log(response);
        }) 
        .catch(function (error) {
            alert(error);
        });
    }
    return {users, isLoading, deleteData, postData}
}

