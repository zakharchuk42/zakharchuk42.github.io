import { MyLinkProps } from './types'
import s from './MyLink.module.scss'

export const MyLink: React.FC<MyLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={s.myLink}
    >
      {children}
    </a>
  )
}
