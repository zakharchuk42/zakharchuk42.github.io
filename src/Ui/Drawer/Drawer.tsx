import s from './Drawer.module.scss'
import { DrawerProps } from './types'
import { IoChevronBack } from 'react-icons/io5'
import clsx from 'clsx'
import { useOpenState } from '../../helpers/hooks/useOpenState'
import { iconStyle } from '../../helpers/utils/iconStyle'

export const Drawer: React.FC<DrawerProps> = ({
  children,
  left,
  right,
  label,
}) => {
  const { boolean: leftOpen, handleToggle: leftToggle } = useOpenState()
  const { boolean: rightOpen, handleToggle: rightToggle } = useOpenState()

  const drawerClass = clsx(s.drawer, {
    [s.drawerLeft]: left,
    [s.drawerLeftOpen]: leftOpen,
    [s.drawerRight]: right,
    [s.drawerRightOpen]: rightOpen,
  })

  const buttonClass = clsx(s.drawerButton, {
    [s.drawerButtonLeft]: left,
    [s.drawerButtonLeftOpen]: leftOpen,
    [s.drawerButtonRight]: right,
    [s.drawerButtonRightOpen]: rightOpen,
  })

  const labelClass = clsx(s.label, {
    [s.labelLeft]: left,
    [s.labelRight]: right,
  })

  const onClick = left ? leftToggle : rightToggle

  return (
    <div className={drawerClass}>
      <div className={buttonClass} onClick={onClick}>
        <IoChevronBack {...iconStyle()} />
      </div>
      <div className={labelClass}>
        <div className={s.labelText}>{label}</div>
      </div>
      <div className={s.body}>{children}</div>
    </div>
  )
}
