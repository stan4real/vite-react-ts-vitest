import { ChangeEvent, FC } from 'react'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'search'
  className:string
  label?: string
  value?: string | number
  name?: string
  placeholder?: string
  autoComplete?:string
  error?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e:React.FocusEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
  type,
  className,
  label,
  value,
  name,
  placeholder,
  autoComplete,
  disabled,
  onChange,
  onBlur
}) => {
  return (
    <div className="input-wrapper">
      <label  
      className='block text-gray-700 text-sm font-bold mb-2'
      htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        className={className}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
    </div>
  )
}

export default Input