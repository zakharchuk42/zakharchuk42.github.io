import s from './BackDrop.module.scss'
import { BackDropProps } from './types'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const BackDrop: React.FC<BackDropProps> = ({ children, isOpened }) => {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(false)

  const closeModal = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (!isShow) {
      setTimeout(() => {
        setIsShow(true)
      }, 50)
    } else {
      setIsShow(false)
    }
  }, [isOpened])

  return (
    <div
      className={clsx(s.backDrop, {
        [s.backDropOpen]: isShow,
      })}
      onClick={closeModal}
    >
      {children}
    </div>
  )
}
