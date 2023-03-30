import { FileOnTableProps } from './types'
import { getImageUrl } from '../../helpers/utils/getImageUrl'
import { useOpenState } from '../../helpers/hooks/useOpenState'
import { OptionalPanel } from '../OptionalPanel/OptionalPanel'
import { useFileOptional } from './hooks/useFileOptional'
import { IoLockClosedOutline } from 'react-icons/io5'
import s from './FileOnTable.module.scss'

export const FileOnTable: React.FC<FileOnTableProps> = ({ file }) => {
  const { boolean: isHover, handleFalse, handleTrue } = useOpenState()

  const caseFile = useFileOptional(file)

  return (
    <div
      className={s.itemOnTable}
      onMouseEnter={handleTrue}
      onMouseLeave={handleFalse}
    >
      <OptionalPanel isHover={isHover} optionalPanel={caseFile} />
      <img className={s.image} src={getImageUrl(file.imgPath)} alt={file.alt} />
      {file.isBlocked && (
        <div className={s.button}>
          <IoLockClosedOutline
            title={'File is block!'}
            size='16px'
            color='#DC143C'
          />
        </div>
      )}
    </div>
  )
}
