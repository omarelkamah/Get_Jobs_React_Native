import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('Full-time')
  const navigation = useNavigation()
  const jobTypes = ['Full-time', 'part-time', 'Contractor']
  return (
    <View style={styles.container}>
        <Text style={styles.userName}>Hello Omar</Text>
        <Text  style={styles.welcomeMessage}>Find your perfect job</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput placeholder='What are you locking for?' style={styles.searchInput}/>
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <FlatList data={jobTypes} renderItem={({item}) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {
              setActiveJobType(item)
              navigation.navigate(`/search/${item}`)
            }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          />
        </View>

    </View>
  )
}

export default Welcome