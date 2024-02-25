import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailScreen = ({route}) => {
  const {id, name, image} = route.params;

  const addToFavorite = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('orchids');
      const orchids =  jsonValue ? JSON.parse(jsonValue) : [];
      const findIndex = orchids.findIndex((orchid) => orchid.id === id);
      if (findIndex >= 0){
        Alert.alert("Notifcation", "Orchid already exists");
      } else {
        orchids.push({id, name, image});
        await AsyncStorage.setItem('orchids', JSON.stringify(orchids));
        Alert.alert("Notifcation", "Added To Favorite");
      }
    } catch (error) {
      
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.textOrchid}>ID: {id}</Text>
      <Text style={styles.textOrchid}>{name}</Text>
      <Image source={{uri: image}} style={{width: '90%', height: 200, borderRadius: 12}}/>
      <Text style={{margin: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem enim quisquam porro maiores tempore aut aliquam, consequuntur perspiciatis cumque accusamus ab eveniet itaque aspernatur obcaecati, fugiat impedit perferendis quas.</Text>

      <TouchableOpacity onPress={addToFavorite}>
        <Text style={{backgroundColor: 'cyan', padding: 10, textAlign: 'center', borderRadius: 12, color: 'white'}}>
          Add To Fovarite
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textOrchid: {
    fontSize: 20, 
    // fontWeight: 600,
    textAlign: 'center'
  }
})

export default DetailScreen