import { useTypedSelector } from '../../helpers/hooks/useTypedSelector'
import { getImageUrl } from '../../helpers/utils/getImageUrl'
import s from './MainTable.module.scss'

export const MainTable = () => {
  const { filesOnTable } = useTypedSelector((state) => state.data)

  return (
    <>
      {filesOnTable.map((file) => {
        return (
          <div key={file.alt}>
            <img
              className={s.image}
              src={getImageUrl(file.imgPath)}
              alt={file.alt}
            />
          </div>
        )
      })}
    </>
  )
}
