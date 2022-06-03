import React from 'react'
import { ThemeContext } from '@context'
import './style.scss'

interface IProps {
  ref?: React.RefObject<HTMLInputElement>
  id?: string
  name?: string
  value?: string
  placeholder?: string
  defaultValue?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
  size?: 'small' | 'middle' | 'large'
  icon?: string
  iconPosition?: 'left' | 'right'
  iconListenTheme?: boolean // чтобы инвертировать цвет иконки, когда меняется тема
  disabled?: boolean
  type?: 'text' | 'password' | 'mail' | 'checkbox' | 'radio'
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'inherit'
  rounded?: 'poignant' | 'smoothed'
  fullWidth?: boolean
}

export const Input: React.FC<IProps> = ({
  ref,
  id,
  name,
  value,
  placeholder,
  defaultValue,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  size = 'middle',
  icon,
  iconPosition,
  iconListenTheme,
  disabled = false,
  type = 'text',
  color = 'inherit',
  rounded = 'poignant',
  fullWidth
}) => {
  const inputArr: string[] = [size]
  if (rounded) inputArr.push(rounded)
  if (iconPosition === 'right') inputArr.push('icon-right')
  else if (iconPosition === 'left') inputArr.push('icon-left')
  else if (fullWidth) inputArr.push('full')

  if (color !== 'inherit') {
    inputArr.push('text-' + color)
    inputArr.push('b-' + color)
  }

  const { themeMode } = React.useContext(ThemeContext)!
  const mode = iconListenTheme ? ' ' + themeMode : ''

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: fullWidth ? '100%' : 'auto'
      }}
    >
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        className={inputArr.join(' ')}
      />
      {icon && <img src={icon} alt='' className={iconPosition + mode} />}
    </div>
  )
}
