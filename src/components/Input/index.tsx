import React from 'react'
import './style.scss'

interface IProps {
  ref?: React.RefObject<HTMLInputElement>
  id?: string
  name?: string
  value?: string
  placeholder?: string
  defaultValue?: string
  success?: boolean
  warning?: string
  error?: string
  required?: boolean
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
  size?: 'small' | 'middle' | 'large'
  icon?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  type?: 'text' | 'password' | 'mail'
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'inherit'
  rounded?: 'poignant' | 'smoothed' // скругления углов
  fullWidth?: boolean
}

export const Input: React.FC<IProps> = ({
  ref,
  id,
  name,
  value,
  placeholder,
  defaultValue,
  success,
  warning,
  error,
  required,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  size = 'middle',
  icon,
  iconPosition,
  disabled = false,
  type = 'text',
  color = 'inherit',
  rounded = 'poignant',
  fullWidth
}) => {
  const inputArr: string[] = [size]
  if (rounded) inputArr.push(rounded)
  if (fullWidth) inputArr.push('full')
  if (success) inputArr.push('success')
  if (warning) inputArr.push('warning')
  if (error) inputArr.push('error')
  if (iconPosition === 'right') inputArr.push('icon-right')
  else if (iconPosition === 'left') inputArr.push('icon-left')

  if (color !== 'inherit') {
    inputArr.push('text-' + color)
    inputArr.push('b-' + color)
  }

  const sideIcon = iconPosition ? ' ' + iconPosition : ''

  return (
    <div
      className='input-wrapper'
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: fullWidth ? '100%' : 'auto'
      }}
    >
      <div className={size + sideIcon} style={{ position: 'relative' }}>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          required={required}
          disabled={disabled}
          className={inputArr.join(' ')}
        />
        {icon && <img src={icon} alt='' className={iconPosition} />}
      </div>
      {error && <p>{error}</p>}
    </div>
  )
}
