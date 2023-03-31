import React, { memo } from 'react'
import { ButtonProps } from './types'
import s from './Button.module.scss'
import { Typography } from '../Typography/Typography'

export const Button: React.FC<ButtonProps> = memo(({ children, onClick }) => {
  return (
    <div className={s.button} onClick={onClick}>
      <Typography font='btn'>{children}</Typography>
    </div>
  )
})
