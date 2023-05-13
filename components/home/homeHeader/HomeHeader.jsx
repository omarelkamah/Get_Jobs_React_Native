import { View, Text } from 'react-native'
import styles from './homeHeader.style'
import ScreenHeaderBtn from '../../common/header/ScreenHeaderBtn'
import { icons, images } from '../../../constants'


const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      <ScreenHeaderBtn iconUrl={images.profile}  dimension="100%"/>
    </View>
  )
}

export default HomeHeader