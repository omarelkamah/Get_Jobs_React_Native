import { SafeAreaView } from 'react-native'
import Nearbyjobs from '../components/home/nearby/Nearbyjobs'
import HomeHeader from '../components/home/homeHeader/HomeHeader'
import styles from '../constants/mainStyle.style'
import Welcome from '../components/home/welcome/Welcome'
import Popularjobs from '../components/home/popular/Popularjobs'

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <HomeHeader />
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
    </SafeAreaView>
  )
}

export default Home