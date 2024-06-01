import clsx from 'clsx'

import BaseButton, {
  BaseButtonProps,
  BaseButtonComponent,
} from './BaseButton'



export type ButtonProps<C extends BaseButtonComponent = 'button'> =
  BaseButtonProps<C> & {
    loading?: boolean
    disabled?: boolean
  }

export function Button<C extends BaseButtonComponent = 'button'>({
  className,
  loading,
  disabled,
  ...props
}: ButtonProps<C>) {
  return (
    <BaseButton<C>
      className={clsx(
        'flex-1 px-6 py-2 font-semibold select-none rounded-md transition duration-200 ease-in-out',        
        className,
      )}
      {...(props as BaseButtonProps<C>)}
    />
  )
}