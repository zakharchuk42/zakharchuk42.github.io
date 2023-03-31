import { Block } from '../../../Ui/Block/Block'
import { MyLink } from '../../../Ui/MyLink/MyLink'
import { Typography } from '../../../Ui/Typography/Typography'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

export const Footer = () => {
  return (
    <Block direction='column' gap='lg'>
      <Typography font='subtitle' color='red'>
        Follow Me
      </Typography>
      <Block>
        <MyLink href='https://github.com/zakharchuk42'>
          <IoLogoGithub title={'GitHub'} size='34px' color='#DC143C' />
          /zakharchuk42
        </MyLink>
      </Block>
      <Block>
        <MyLink href='https://www.linkedin.com/in/vit-zakharchuk/'>
          <IoLogoLinkedin title={'LinkedIn'} size='34px' color='#DC143C' />
          /vit-zakharchuk
        </MyLink>
      </Block>
    </Block>
  )
}
