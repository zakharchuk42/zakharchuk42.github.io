import { FileProps } from './types'
import { useFileOptional } from './hooks/useFileOptional'
import { IoLockClosedOutline } from 'react-icons/io5'
import { useOpenState } from '../../../../helpers/hooks/useOpenState'
import { getImageUrl } from '../../../../helpers/utils/getImageUrl'
import { OptionalPanel } from '../OptionalPanel/OptionalPanel'
import { iconStyle } from '../../../../helpers/utils/iconStyle'
import s from './File.module.scss'
import clsx from 'clsx'

export const File: React.FC<FileProps> = ({ item }) => {
  const { boolean: isHover, handleFalse, handleTrue } = useOpenState()

  const caseFile = useFileOptional(item)

  return (
    <div
      className={clsx(s.itemOnTable, {
        [s.itemOnTableHover]: isHover,
      })}
      onMouseEnter={handleTrue}
      onMouseLeave={handleFalse}
    >
      <OptionalPanel isHover={isHover} optionalPanel={caseFile} />
      <img className={s.image} src={getImageUrl(item.imgPath)} alt={item.alt} />
      {item.isBlocked && (
        <div className={s.button}>
          <IoLockClosedOutline
            {...iconStyle('File is block!', '#fff', '16px')}
          />
        </div>
      )}
    </div>
  )
}
