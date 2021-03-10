import {View,StyleSheet} from 'react-native'
import React from 'react'
import {enableScreens} from 'react-native-screens'

enableScreens()

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import MainScreen from './src/screens/MainScreen';
import ItemScreen from './src/screens/ItemScreen'

const Stack = createNativeStackNavigator()

export default function App() {


  return  (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Main' component = {MainScreen}/>
        <Stack.Screen name = 'Item' component = {ItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  )

    
}

const styles = StyleSheet.create({
  app:{
    flex:1
  }
})

