import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../helpers/constants/allRoutes'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { MyLink } from '../../../../Ui/MyLink/MyLink'
import { Typography } from '../../../../Ui/Typography/Typography'
import s from './Footer.module.scss'

export const Footer = () => {
  const navigate = useNavigate()

  return (
    <Block style={s.footer} gap='xxl' align='center' direction='column'>
      <Typography color='white' font='subtitle'>
        If you liked this game, please share this
        <span> https://zakharchuk42.github.io/</span> link on social networks or
        with your friends! Thanks a lot!
      </Typography>
      <Button onClick={() => navigate(ROUTES.UNSOLVED)}>Go Home</Button>
      <Block>
        <Typography color='white'>
          This is a Free Mini Version of Unsolved Case Files. For full cases to
          solve please visit:{' '}
          <MyLink href='https://UnsolvedCaseFiles.com'>
            UnsolvedCaseFiles.com
          </MyLink>
        </Typography>
      </Block>
    </Block>
  )
}
