import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export function GreetingOverlay() {
  return (
    <View style={styles.overlay}></View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 100
  }
})
