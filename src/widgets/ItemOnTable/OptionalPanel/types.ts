import { IconType } from 'react-icons'

export type OptionalPanelProps = {
  isHover: boolean
  optionalPanel: {
    icon: IconType
    callBack: () => void
    title: string
  }[]
}
