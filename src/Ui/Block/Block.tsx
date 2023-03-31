import { BlockProps } from './types'
import clsx from 'clsx'
import s from './Block.module.scss'
import { alignItems, directionFlex, gapSpace, justifyContent } from './const'

export const Block: React.FC<BlockProps> = ({
  children,
  direction = 'row',
  align,
  justify,
  gap,
  width,
  height,
  grow,
  style,
}) => {
  const className = clsx(
    s.block,
    style,
    directionFlex[direction],
    gap && gapSpace[gap],
    align && alignItems[align],
    justify && justifyContent[justify],
    height && s.fullHight,
    grow && s.grow
  )

  return (
    <div className={className} style={width ? { width: `${width}` } : {}}>
      {children}
    </div>
  )
}
