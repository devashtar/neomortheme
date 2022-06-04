import React from 'react'
import './style.scss'
import { ThemeContext } from '@context'

interface IProps {
  ref?: React.RefObject<HTMLButtonElement>
  name?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size?: 'small' | 'middle' | 'large'
  icon?: string
  iconPosition?: 'top' | 'right' | 'bottom' | 'left'
  iconListenTheme?: boolean // чтобы инвертировать цвет иконки, когда меняется тема
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'outlined' | 'filled'
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'inherit'
  rounded?: 'poignant' | 'smoothed'
  appearance?: 'convex' | 'concave' | 'flat'
  shape?: 'square' | 'circle'
  equilateral?: boolean
}

export const Button: React.FC<IProps> = ({
  ref,
  name,
  value = '',
  onClick = () => {},
  size = 'middle',
  icon,
  iconPosition,
  iconListenTheme,
  disabled = false,
  type = 'button',
  color = 'inherit',
  variant = 'filled',
  rounded,
  appearance,
  shape,
  equilateral = false
}) => {
  const btnArr: string[] = [size]
  if (rounded) btnArr.push(rounded)
  if (appearance) btnArr.push(appearance)
  if (shape) {
    const shapeName = shape + '-' + size + (equilateral ? '-fixed' : '')
    btnArr.push(shapeName)
  }
  if (iconPosition === 'top') btnArr.push('icon-top')
  else if (iconPosition === 'right') btnArr.push('icon-right')
  else if (iconPosition === 'bottom') btnArr.push('icon-bottom')
  else if (iconPosition === 'left') btnArr.push('icon-left')

  if (color !== 'inherit') {
    if (variant === 'outlined') {
      btnArr.push('text-' + color)
      btnArr.push('b-' + color)
    } else if (variant === 'filled') {
      btnArr.push('bg-' + color)
    }
  }

  const { themeMode } = React.useContext(ThemeContext)!

  const mode = iconListenTheme ? ' ' + themeMode : ''

  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <button
        ref={ref}
        name={name}
        disabled={disabled}
        type={type}
        className={btnArr.join(' ')}
        onClick={onClick}
      >
        {value && <p>{value}</p>}
        {icon && <img src={icon} alt='' className={iconPosition + mode} />}
      </button>
    </div>
  )
}
