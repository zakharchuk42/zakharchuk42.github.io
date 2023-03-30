import { CustomInputProps } from './types'
import s from './CustomInput.module.scss'

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={s.input}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={true}
    />
  )
}
