import { useState } from 'react'
import { ITEM_TYPE } from '../../helpers/constants/itemType'
import { useActions } from '../../helpers/hooks/useActions'
import { addStyleFilePosition } from '../../helpers/utils/addStyleFilePosition'
import { CaseFilesTypes } from '../../store/slices/dataSlice'
import { File } from '../File/File'
import { useDraggable } from '../MainTable/hooks/useDraggable'
import { Note } from '../Note/Note'
import { ItemOnTableProps } from './types'

export const ItemOnTable: React.FC<ItemOnTableProps> = ({ items, type }) => {
  const [file, setFile] = useState<CaseFilesTypes | null>()
  const { onDragStart, onDragEnd } = useDraggable(file, setFile)
  const { moveFileArroundTable, moveNoteArrountTable } = useActions()

  const itemType = {
    [ITEM_TYPE.FILE]: {
      action: moveFileArroundTable,
      component: File,
    },
    [ITEM_TYPE.NOTE]: {
      action: moveNoteArrountTable,
      component: Note,
    },
  }

  const Component = itemType[type].component

  return (
    <>
      {items.map((item: any) => {
        const stylePosition = addStyleFilePosition(item?.position)
        return (
          <div
            key={item.id}
            onDragStart={(e) => onDragStart(e, item.isBlocked)}
            onDragEnd={(e) => onDragEnd(e, item, itemType[type].action)}
            style={stylePosition}
            draggable={true}
          >
            <Component item={item} />
          </div>
        )
      })}
    </>
  )
}
