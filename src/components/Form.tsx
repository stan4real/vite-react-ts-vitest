import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Input from "./ui/Input/Input"
import { fakeAcc } from "../utils/secret"
import Button from "./ui/Button/Button"

const Form = () => {
  const [email, setEmail] = useState('')
  const [pass,setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passDirty, setPassDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email can`t be empty')
  const [passError, setPassError] = useState('Password can`t be empty')
  const [validForm,setValidForm] =useState(false)
  const navigate = useNavigate()
  
  

  useEffect(()=> {
    if (emailError || passError) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [emailError, passError])

  const blurHandler = (e:React.FocusEvent<HTMLInputElement>) => {
    switch(e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPassDirty(true)
        break
    }
  }
  const passHandler =(e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8 ) {
      setPassError('Pass should be more than 3 and less than 8 symbols')
    } else {
      setPassError('')
    }
  }
  const emailHandler =(e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(String(e.target.value).toLowerCase())){
      setEmailError('Incorrect email')
    } else {
      setEmailError('')
    }
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(validForm){
      if((email === fakeAcc.username) && (pass===fakeAcc.password)){
        navigate('/vite-react-ts-vitest/devicelist')
      }
      else {
        alert('Incorrect Data')
      }
    }
    setEmail('')
    setPassword('')
  }

  return (
<div className="ml-auto mr-auto w-full max-w-xs">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <Input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-1 focus:ring-inset" 
        value={email}
        label="Email"
        name="email" 
        type="text" 
        placeholder="Email"
        onChange={emailHandler}
        onBlur={blurHandler}
        />
        {(emailDirty && emailError) && <div data-testid='blurhelper' className='text-red-500 text-xs p-1'> {emailError}</div>}
    </div>
    <div className="mb-6">
      <Input 
        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:ring-1 focus:ring-inset" 
        value={pass}
        label="Password"
        name="password" 
        autoComplete="on"
        type="password"
        placeholder="Password"
        onChange={passHandler}
        onBlur={blurHandler}
        />
        {(passDirty && passError) && <div data-testid='blurhelper2' className='text-red-500 text-xs'> {passError}</div>}
    </div>
    <div className="flex">
      <Button
      type="submit"
      className='btn-primary'
      disabled={!validForm}
      name='Вход'
      />
    </div>
    
  </form>
</div>
  )
}

export default Form