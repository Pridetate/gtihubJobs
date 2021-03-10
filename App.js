import {View,StyleSheet} from 'react-native'
import React from 'react'
import {enableScreens} from 'react-native-screens'

enableScreens()

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import MainScreen from './src/screens/MainScreen';
import ItemScreen from './src/screens/ItemScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

export default function App() {


  return  (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name = 'All Jobs' component = {MainScreen} />
          <Stack.Screen name = 'Full Job Description' component = {ItemScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )

    
}

const styles = StyleSheet.create({
  app:{
    flex:1
  }
})

