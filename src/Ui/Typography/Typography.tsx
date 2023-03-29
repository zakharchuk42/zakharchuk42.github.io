import { TypographyProps } from './types'
import clsx from 'clsx'
import s from './Typography.module.scss'

type MapperTextType = {
  [key: string]: string
}

const colorText: MapperTextType = {
  white: s.colorWhite,
  red: s.colorRed,
  grey: s.colorGrey,
}

const fontText: MapperTextType = {
  h1: s.h1,
  subtitle: s.subtitle,
  body: s.body,
  small: s.small,
  btn: s.btn,
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  color = 'white',
  font = 'body',
  uppercase,
  maxWidth,
}) => {
  const className = clsx(
    fontText[font],
    colorText[color],
    uppercase && s.uppercase
  )
  return (
    <p
      className={className}
      style={maxWidth ? { maxWidth: `${maxWidth}` } : {}}
    >
      {children}
    </p>
  )
}
