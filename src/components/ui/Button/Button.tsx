import { FC } from "react"

interface buttonProps {
    type?:  'submit' | 'button' | 'reset'
    name:string
    className?:string
    disabled?: boolean,
  }
  
const Button: FC<buttonProps> = (
    {
    type,
    name,
    className,
    disabled
}) => {
  return (
    
        <button
        type={type}
        className={className}
        disabled={disabled}
        >
            {name}
        </button>
    
  )
}

export default Button