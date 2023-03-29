type SpaceEnum = ['sm', 'lg', 'xl', 'xxl']
type DirectionFlexEnum = ['row', 'column']
type AlignFlexEnum = ['start', 'center', 'end']
type JustifyFlexEnum = ['around', 'between', 'center', 'end']

export interface BlockProps {
  children: React.ReactNode
  direction?: DirectionFlexEnum[number]
  align?: AlignFlexEnum[number]
  justify?: JustifyFlexEnum[number]
  gap?: SpaceEnum[number]
  width?: string
  height?: boolean
  grow?: boolean
}
