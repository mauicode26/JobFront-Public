import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface NavbarProps {
  title?: string,
  subtitle?: string,
  navigation: any
}

export default function Navbar(props: NavbarProps) {

  let loggedInUserId = 1

  return (
    <View style={styles.navBar}>
      <Pressable style={styles.listIcon} onPress={() => props.navigation.navigate('Feed')}>
        <Icon name="list-alt" size={28} color="#000"/>
      </Pressable>
      <Text style={styles.logo}>{props.title ?? 'JobFront'}</Text>
      <Text style={styles.location}>{props?.subtitle ?? ''}</Text>
      <Pressable style={styles.profileIcon} onPress={() => props.navigation.navigate('UserProfile', {userId: loggedInUserId})}>
        <Icon name="person" size={28} color="#000"/>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  listIcon: {
    position: 'absolute',
    left: 30,
    top: 85
  },
  profileIcon: {
    position: 'absolute',
    right: 30,
    top: 85
  },
  navBar: {
    zIndex: 10,
    width: '100%',
    paddingTop: 80,
    paddingBottom: 5,
    backgroundColor: '#fff',
    color: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .25,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#c6c6c6',
    marginBottom: 10
  },
  logo: {
    width: '100%',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  location: {
    width: '100%',
    color: '#000',
    fontWeight: '300',
    fontSize: 14,
    textAlign: 'center',
  }
})
