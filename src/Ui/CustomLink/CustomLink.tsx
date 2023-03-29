import { Link } from 'react-router-dom'
import { CustomLinkProps } from './types'
import s from './CustomLink.module.scss'
import { Typography } from '../Typography/Typography'

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const { children } = props
  return (
    <Link className={s.customLink} {...props}>
      <Typography font='btn'>{children}</Typography>
    </Link>
  )
}
