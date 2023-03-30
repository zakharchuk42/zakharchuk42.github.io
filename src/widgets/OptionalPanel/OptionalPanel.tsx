import clsx from 'clsx'
import { OptionalPanelProps } from './types'
import s from './OptionalPanel.module.scss'
import { Block } from '../../Ui/Block/Block'

export const OptionalPanel: React.FC<OptionalPanelProps> = ({
  isHover,
  optionalPanel,
}) => {
  return (
    <div
      className={clsx(s.optionalPanel, {
        [s.optionalPanelHovered]: isHover,
      })}
    >
      <Block gap='sm'>
        {optionalPanel.map((item, idx) => {
          const Icon = item.icon
          return (
            <div className={s.button} onClick={item.callBack} key={idx}>
              <Icon title={item.title} size='18px' color='#DC143C' />
            </div>
          )
        })}
      </Block>
    </div>
  )
}
