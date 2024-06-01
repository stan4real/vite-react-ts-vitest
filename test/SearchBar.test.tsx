import React from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen} from '@testing-library/react'
import SearchBar from '../src/components/SearchBar'

describe('Searchbar component test(incluidng devicelist)', () => {
    
    describe(('Input unit test'), () => {
        it('should render input element', async () => {
            render (<SearchBar/>)
            const inputElement:HTMLInputElement = screen.getByPlaceholderText(/Search .../i)
            expect(inputElement).toBeDefined()
        }),

        it('should be able to type in input', async () => {
            render (<SearchBar/>)
            const inputElement:HTMLInputElement = screen.getByPlaceholderText(/Search .../i)
            fireEvent.change(inputElement, {target : {value: '9'}})
            expect(inputElement.value).toBe('9')
        })
    })
})