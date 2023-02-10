import React from 'react'
import DrawerContainer from '../DrawerContainer/DrawerContainer';
import HomeScreen from '../screens/Home/HomeScreen'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import DashboardScreen from '../screens/Dashboard/DashboardScreen'

const Stack = createStackNavigator();
function MainNavigator() {
    return(
        <Stack.Navigator
          screenOptions={{
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
              }
          }}
        >
           <Stack.Screen name='Home' component={HomeScreen} />
           <Stack.Screen name='Dashboard' component={DashboardScreen} />
              </Stack.Navigator>
  )
} 

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;
