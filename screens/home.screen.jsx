import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import {DataOrchids} from '../constants/data.orchis'
import Orchid from '../components/orchid.component'

const HomeScreen = ({navigation}) => {
  const handlePress = (item) => {
    navigation.navigate("Detail", item)
  }

  return (
    <View>
        <FlatList
            data={DataOrchids}
            renderItem={({item})=> <TouchableOpacity style={{flex: 1}} onPress={() => handlePress(item)}>
                <Orchid item={item} />
            </TouchableOpacity>}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
        />
    </View>
  )
}

export default HomeScreen