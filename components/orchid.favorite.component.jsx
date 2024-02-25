import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const OrchidFavorite = ({item, onDelete}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginVertical: 10}}>
        <Text style={{fontSize: 20, fontWeight: 600}}>{item.name}</Text>
        <Image source={{uri: item.image}} style={{width: '90%', height: 200, borderRadius: 12}}/>
        <TouchableOpacity onPress={onDelete}>
            <Text style={{backgroundColor: "red", padding: 4, marginTop: 10}}>Delete</Text>
        </TouchableOpacity>
    </View>
  )
}

export default OrchidFavorite