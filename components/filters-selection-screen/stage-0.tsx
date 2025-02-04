import React, { useContext, useState } from 'react'
import { Image, ImageStyle, Pressable, StyleSheet, Text, View } from 'react-native'
import FiltersSelectionContext from '../../contexts/filters-selection-context'

export const Stage0 = () => {
  const filtersSelectionContext = useContext(FiltersSelectionContext)
  const [activeOption, setActiveOption] = useState(filtersSelectionContext.filters.location.state)
  const iconStyle: ImageStyle = {width: 70, height: 70, marginBottom: 5, resizeMode: 'contain'}
  const imgFlorida = require('../../assets/icon-florida-white.png')
  const imgNewJersey = require('../../assets/icon-nj-white.png')
  const imgTennessee = require('../../assets/icon-tn-white.png')
  const imgTexas = require('../../assets/icon-tx-white.png')
  const IconFlorida = (): React.ReactNode => {
    return (<Image
    source={imgFlorida}
    style={iconStyle}
     />)
  }
  const IconNewJersey = (): React.ReactNode => {
    return (<Image
    source={imgNewJersey}
    style={iconStyle}
     />)
  }
  const IconTennessee = (): React.ReactNode => {
    return (<Image
    source={imgTennessee}
    style={iconStyle}
     />)
  }
  const IconTexas = (): React.ReactNode => {
    return (<Image
    source={imgTexas}
    style={iconStyle}
     />)
  }
  const handleOptionPress = (option: string) => {
    setActiveOption(option)
    filtersSelectionContext.setFilterLocation('state', option)
  }

  return (
    <>
        <View style={styles.row}>
          <Pressable onPress={() => handleOptionPress('Florida')} style={activeOption === 'Florida' ? styles.stateSquareActive : styles.stateSquare}><IconFlorida/><Text style={styles.stateSquareText}>Florida</Text></Pressable>
          <Pressable onPress={() => handleOptionPress('New Jersey')} style={activeOption === 'New Jersey' ? styles.stateSquareActive : styles.stateSquare}><IconNewJersey/><Text style={styles.stateSquareText}>New Jersey</Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable onPress={() => handleOptionPress('Texas')} style={activeOption === 'Texas' ? styles.stateSquareActive : styles.stateSquare}><IconTexas/><Text style={styles.stateSquareText}>Texas</Text></Pressable>
          <Pressable onPress={() => handleOptionPress('Tennessee')} style={activeOption === 'Tennessee' ? styles.stateSquareActive : styles.stateSquare}><IconTennessee/><Text style={styles.stateSquareText}>Tennessee</Text></Pressable>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  stateSquare: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateSquareActive: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001277'
  },
  stateSquareText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  }
})
