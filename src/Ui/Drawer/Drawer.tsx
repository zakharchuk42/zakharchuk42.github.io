import s from './Drawer.module.scss'
import { DrawerProps } from './types'
import { IoChevronBack } from 'react-icons/io5'
import clsx from 'clsx'
import { useOpenState } from '../../helpers/hooks/useOpenState'

export const Drawer: React.FC<DrawerProps> = ({ children, left, right }) => {
  const { open: leftOpen, handleToggle: leftToggle } = useOpenState()
  const { open: rightOpen, handleToggle: rightToggle } = useOpenState()

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

  const onClick = left ? leftToggle : rightToggle

  return (
    <div className={drawerClass}>
      <div className={buttonClass} onClick={onClick}>
        <IoChevronBack size='36px' color='#DC143C' />
      </div>
      {children}
    </div>
  )
}
