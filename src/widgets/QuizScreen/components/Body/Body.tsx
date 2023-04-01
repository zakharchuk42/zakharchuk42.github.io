import { getImageUrl } from '../../../../helpers/utils/getImageUrl'
import { Block } from '../../../../Ui/Block/Block'
import { Divider } from '../../../../Ui/Divider/Divider'
import { Typography } from '../../../../Ui/Typography/Typography'

export const Body = () => {
  return (
    <>
      <Block direction='column' gap='xxl' align='center'>
        <Typography font='h1' color='white'>
          The killer planted the tree as seed
        </Typography>
        <img src={getImageUrl('gratz/call.jpg')} alt='call' />
      </Block>
      <Divider />
      <Block gap='xxl' align='center'>
        <Block>
          <Typography font='h1' color='white'>
            The tree has 40 rings so it was a seed 40 years ago. (give or take a
            few)
          </Typography>
        </Block>
        <Block>
          <img src={getImageUrl('gratz/stump.jpg')} alt='call' />
        </Block>
      </Block>
      <Divider />
      <Block direction='column' gap='xxl' align='center'>
        <Typography font='h1' color='white'>
          Only one suspect was alive 40 years prior:
        </Typography>
        <Block gap='xxl'>
          <Block direction='column' align='center' gap='xl'>
            <img src={getImageUrl('suspects/SamWilliams.png')} alt='call' />
            <Typography color='white' font='subtitle'>
              36 Years Old
            </Typography>
          </Block>
          <Block direction='column' align='center' gap='xl'>
            <img src={getImageUrl('suspects/JerryAndersen.png')} alt='call' />
            <Typography color='white' font='subtitle'>
              49 Years Old
            </Typography>
          </Block>
          <Block direction='column' align='center' gap='xl'>
            <img src={getImageUrl('suspects/MartinPark.png')} alt='call' />
            <Typography color='white' font='subtitle'>
              38 Years Old
            </Typography>
          </Block>
        </Block>
      </Block>
    </>
  )
}
