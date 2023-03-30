type PositionType = {
  x: number | null
  y: number | null
  positionItem: boolean
  rotate?: number | null
}

type AddStyleFilePosition = (
  position: PositionType | undefined
) => React.CSSProperties

export const addStyleFilePosition: AddStyleFilePosition = (position) => {
  if (!position) {
    return {}
  }
  const { x, y, positionItem, rotate } = position

  return {
    position: positionItem ? 'absolute' : 'relative',
    left: x ? `${x}px` : null,
    top: y ? `${y}px` : null,
    transform: rotate ? `rotate(${rotate}deg)` : null,
  } as React.CSSProperties
}
