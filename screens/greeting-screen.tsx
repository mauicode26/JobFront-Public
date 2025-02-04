import React from 'react'
import { Button, Text, View } from 'react-native'

export const GreetingScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the greeting screen!</Text>
      <Button title="Go to feed" onPress={() => {navigation.navigate('Feed')}} />
    </View>
  )
}
