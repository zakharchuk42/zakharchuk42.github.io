import s from './CustomTextarea.module.scss'
import { CustomTextareaProps } from './types'

export const CustomTextarea: React.FC<CustomTextareaProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <textarea
      className={s.customTextarea}
      autoFocus={true}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
