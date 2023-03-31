type IconStyleType = (
  title?: string,
  color?: string,
  size?: string
) => {
  title: string | undefined
  size: string
  color: string
}

export const iconStyle: IconStyleType = (
  title,
  color = '#DC143C',
  size = '34px'
) => {
  return {
    title,
    color,
    size,
  }
}
