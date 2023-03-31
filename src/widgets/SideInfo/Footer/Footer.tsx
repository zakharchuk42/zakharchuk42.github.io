import { Block } from '../../../Ui/Block/Block'
import { MyLink } from '../../../Ui/MyLink/MyLink'
import { Typography } from '../../../Ui/Typography/Typography'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { iconStyle } from '../../../helpers/utils/iconStyle'

export const Footer = () => {
  return (
    <Block direction='column' gap='lg'>
      <Typography font='subtitle' color='white'>
        Follow Me
      </Typography>
      <Block>
        <MyLink href='https://github.com/zakharchuk42'>
          <IoLogoGithub {...iconStyle('GitHub', undefined, '26px')} />
          /zakharchuk42
        </MyLink>
      </Block>
      <Block>
        <MyLink href='https://www.linkedin.com/in/vit-zakharchuk/'>
          <IoLogoLinkedin {...iconStyle('LinkedIn', undefined, '26px')} />
          /vit-zakharchuk
        </MyLink>
      </Block>
    </Block>
  )
}
