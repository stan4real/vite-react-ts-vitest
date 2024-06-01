import React from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen} from '@testing-library/react'
import SearchBar from '../src/components/SearchBar'

describe(('Input & DeviceList integration test'), () => {
    it('should render devicelist', async () => {
        render (<SearchBar/>)
        const DeviceListItems = screen.findByTestId('data-table-item-1')
        expect(DeviceListItems).not.toBeNull()
    })

    it('should render sorted devicelist'), async () =>{
        render(<SearchBar/>)
        const inputElement:HTMLInputElement = screen.getByPlaceholderText(/Search .../i)
        fireEvent.change(inputElement, {target : {value: '9'}})
        const DeviceListItems =await screen.findAllByTestId(/data-table-item/i)
        const filtered = (( DeviceListItems).filter( user => {
            return user.id.toString().includes(inputElement.value)
        }))
        expect(filtered).not.toBeNull()
    }
})