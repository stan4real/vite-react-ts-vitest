import React, { useState } from 'react'
import useApi from '../utils/useApi'
import DeviceList from './DeviceList'
import Loader from '../utils/loader'

const SearchBar = () => {
    const {users, isLoading} = useApi()
    const [searchInput, setSearchInput] = useState('')
    
    
    const filteredItems = users.filter( user => {
        return user.id.toString().includes(searchInput.toString())
    })
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }
    
  return (
    <div>
        <input 
        type='search'
        placeholder='Search ...'
        onChange={handleChange}
        value={searchInput}
        className='p-2 border ml-2 mt-2 shadow-sm'
        />
        {isLoading ? <Loader/>:
        <DeviceList filteredItems={filteredItems}/>
        }
    </div>
  )
}

export default SearchBar