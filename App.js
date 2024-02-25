import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import HomeScreen from './screens/home.screen';
import DetailScreen from './screens/detail.screen';
import FavoriteScreen from './screens/favorite.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen () {
  return <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={HomeScreen} />
    <HomeStack.Screen 
      name='Detail' 
      component={DetailScreen}
      options={({route}) => ({title: route.params.name})} />
  </HomeStack.Navigator>
}

const FavoriteStack = createNativeStackNavigator();

function FavoriteStackScreen(){
  return <FavoriteStack.Navigator>
    <FavoriteStack.Screen name='Favorite' component={FavoriteScreen}/>
  </FavoriteStack.Navigator>
}

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight || 0}}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{headerShown: false, tabBarActiveTintColor: "red"}}
        >
          <Tab.Screen
            name='HomeTab'
            component={HomeStackScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({color, size}) => <Icon name='house-user' color={color} size={size}/>
            }} />
          
          <Tab.Screen 
            name='FavoriteTab'
            component={FavoriteStackScreen}
            options={{
              tabBarLabel: "Favorite",
              tabBarIcon: ({color, size}) => <Icon name='heart' color={color} size={size}/>
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
