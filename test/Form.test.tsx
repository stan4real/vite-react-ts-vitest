import React, { ChangeEventHandler } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, getByTestId, render, screen, waitFor} from '@testing-library/react'
import Form from '../src/components/Form'

const mockedUseNavigate = vi.fn();
beforeEach(() => {

    vi.mock("react-router", async () => {
        return{
            ...vi.importActual('react-router'),
            useNavigate: () => mockedUseNavigate,
            
        }
    });
})
    
const validateEmailInput = (e:string) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(String(e).toLowerCase())){
      return false
    } else {
        return true
    }
}
const validatePassInput = (e:string) => {
    if(e.length > 3 && e.length < 8) {
        return true 
    } else {
        return false
    }
}

describe(('Form inputs unit test'), () => {
    it('should render inputs element', async () => {
        render(<Form/>)
        const inputElement:HTMLInputElement = screen.getByPlaceholderText(/Email/i)
        expect(inputElement).not.toBeNull()
    })

    it('should validate blur event (email)', async () => {
        render(<Form/>)
        const inputEmailElement = screen.getByPlaceholderText(/Email/i)
        fireEvent.blur(inputEmailElement)
        const emailErrorLabel = screen.getByTestId('blurhelper')
        expect(emailErrorLabel).not.toBeNull()
    })

    it('should validate blur event (pass)', async () => {
        render(<Form/>)
        const inputPassElement = screen.getByPlaceholderText(/Password/i)
        fireEvent.blur(inputPassElement)
        const passErrorLabel = screen.getByTestId('blurhelper2')
        expect(passErrorLabel).not.toBeNull()
    })

    it('should validate email', async () => {
        render(<Form/>)
        const emailInput:HTMLInputElement = screen.getByPlaceholderText(/Email/i)
        fireEvent.change(emailInput, {target : {value: 'test@test.mail'}})
        expect(validateEmailInput(emailInput.value)).toBeTruthy()
    })

    it('should NOT validate email', async () => {
        render(<Form/>)
        const emailInput:HTMLInputElement = screen.getByPlaceholderText(/Email/i)
        fireEvent.change(emailInput, {target : {value: 'test'}})
        expect(validateEmailInput(emailInput.value)).toBeFalsy()
    })

    it('should validate password', async () => {
        render(<Form/>)
        const passInput:HTMLInputElement = screen.getByPlaceholderText(/Password/i)
        fireEvent.change(passInput, {target : {value: '12331'}})
        expect(validatePassInput(passInput.value)).toBeTruthy()
    })
    
    it('should validate password', async () => {
        render(<Form/>)
        const passInput:HTMLInputElement = screen.getByPlaceholderText(/Password/i)
        fireEvent.change(passInput, {target : {value: '123'}})
        expect(validatePassInput(passInput.value)).toBeFalsy()
    })

    it('should submit form', async () => {
        render (<Form/>)
        const submitButton = screen.getByRole('button')
        const emailInput:HTMLInputElement = screen.getByPlaceholderText(/Email/i)
        fireEvent.change(emailInput, {target : {value: 'test@test.mail'}})
        const passInput:HTMLInputElement = screen.getByPlaceholderText(/Password/i)
        fireEvent.change(passInput, {target : {value: '123321'}})
        fireEvent.submit(submitButton)
        waitFor(() => expect(mockedUseNavigate).toBeCalledWith('/devicelist'));
    })
})


