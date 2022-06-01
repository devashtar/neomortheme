import React from 'react'
import './style.css'

interface IProps {
  ref?: React.RefObject<HTMLButtonElement>
  value?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size?: 'small' | 'middle' | 'large'
  icon?: string
  iconPosition?: 'top' | 'right' | 'bottom' | 'left'
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
  rounded?: 'edge' | 'smoothed'
  appearance?: 'convex' | 'concave' | 'flat'
  shape?: 'square' | 'circle'
  equilateral?: boolean
}

export const Button: React.FC<IProps> = ({
  ref,
  value = '',
  onClick = () => {},
  size = 'middle',
  icon = '',
  iconPosition,
  disabled = false,
  type = 'button',
  color = 'primary',
  variant,
  rounded,
  appearance,
  shape,
  equilateral = false
}) => {
  const btnArr: string[] = [size, color]
  if (variant) btnArr.push(variant)
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
        disabled={disabled}
        type={type}
        className={btnArr.join(' ')}
      >
        <p>{value}</p>
        {icon !== '' && <img src={icon} alt='' className={iconPosition} />}
      </button>
    </div>
  )
}
