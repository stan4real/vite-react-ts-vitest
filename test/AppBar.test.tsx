import React from 'react'
import { expect, it } from 'vitest'
import { render, screen} from '@testing-library/react'
import AppBar from '../src/components/AppBar'
import { BrowserRouter } from 'react-router-dom'


const MockAppBar = ()=>{
    return (
        <BrowserRouter>
            <AppBar/>
        </BrowserRouter>
    )
}

it('renderes appbar', async () => {
    render(<MockAppBar/>);
    const appBarItems = screen.getAllByRole('link')
    expect(appBarItems).toHaveLength(5)
})
