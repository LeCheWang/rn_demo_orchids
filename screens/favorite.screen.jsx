import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Orchid from '../components/orchid.component';
import OrchidFavorite from '../components/orchid.favorite.component';

const FavoriteScreen = () => {
  const [orchids, setOrchids] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(()=> {
    try {
      const getOrchid = async() => {
        const jsonValue = await AsyncStorage.getItem('orchids');
        const orchids =  jsonValue ? JSON.parse(jsonValue) : [];
        setOrchids(orchids);
      }

      getOrchid();
    } catch (error) {
      
    }
  }, [refreshing]);

  const pullToRefresh = () => {
    setRefreshing(true);

    setTimeout(()=> {
      setRefreshing(false);
    }, 500)
  }

  const onDelete = async (id) => {
    const findIndex = orchids.findIndex((item) => item.id === id);
    orchids.splice(findIndex, 1);
    await AsyncStorage.setItem("orchids", JSON.stringify(orchids));
    setOrchids([...orchids]); 
  }

  return (
    <View>
      <FlatList 
        data={orchids} 
        style={{minHeight: 200}}
        renderItem={({item}) => <OrchidFavorite item={item} onDelete={() => onDelete(item.id)} /> }
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={pullToRefresh}
      />
    </View>
  )
}

export default FavoriteScreen