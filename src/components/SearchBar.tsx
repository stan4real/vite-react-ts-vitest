import React, { useState } from 'react'
import useApi from '../utils/useApi'
import DeviceList from './DeviceList'
import Loader from '../utils/loader'
import Input from './ui/Input/Input'



const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const {users, isLoading} = useApi()
    
      const filteredItems = (users.filter( user =>  user.id.toString().includes(searchInput.toString())))
      

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }
    
  return (
    <div>
        <Input 
        type='search'
        className='p-2 border ml-2 mt-2 shadow-sm'
        placeholder='Поиск по ID...'
        onChange={handleChange}
        value={searchInput}
        />
        {isLoading ? <Loader/>:
        <DeviceList filteredItems={filteredItems}/>
        }
    </div>
  )
}

export default SearchBar