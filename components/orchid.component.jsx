import React from 'react'
import { Image, View, Text } from 'react-native'

const Orchid = ({item}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginVertical: 10}}>
        <Text style={{fontSize: 20, fontWeight: 600}}>{item.name}</Text>
        <Image source={{uri: item.image}} style={{width: '90%', height: 200, borderRadius: 12}}/>
    </View>
  )
}

export default Orchid