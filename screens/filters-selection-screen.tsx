import React, { useContext } from 'react'
import { Button, Image, ImageProps, ImageStyle, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Navbar from '../components/nav-bar'
import FiltersSelectionContext from '../contexts/filters-selection-context'

export const FiltersSelectionScreen = ({navigation}) => {

  const filtersSelectionContext = useContext(FiltersSelectionContext)

  const renderStageTitle = (): React.ReactNode => {
    return filtersSelectionContext.stages[filtersSelectionContext.activeStage].title
  }
  const renderStageChildren = (): React.ReactNode => {
    return filtersSelectionContext.stages[filtersSelectionContext.activeStage].component()
  }
  const nextStage = () => {
    if (filtersSelectionContext.activeStage === filtersSelectionContext.stages.length - 1) {
      navigation.navigate('Feed')
    } else {
      filtersSelectionContext.setActiveStage(filtersSelectionContext.activeStage + 1)
    }
  }
  const prevStage = () => {
    filtersSelectionContext.setActiveStage(filtersSelectionContext.activeStage - 1)
  }


  return (
    <>
    {/* <Navbar></Navbar> */}
    <View style={styles.mainWrapper}>
        <View style={styles.filterStageContainer}>
          <Text style={styles.filterStageText}>{renderStageTitle()}</Text>
          </View>
        {renderStageChildren()}


        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          {filtersSelectionContext.activeStage > 0  ? <Pressable style={styles.backButton} onPress={prevStage}><Text style={styles.backButtonText}>Back</Text></Pressable> : null}
          <Pressable style={styles.confirmButton} onPress={nextStage}><Text style={styles.confirmButtonText}>Confirm</Text></Pressable>
        </View>

    </View>
    </>
  )


}

const styles = StyleSheet.create({
  actionButtons: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '100%',
  },
  mainWrapper: {
    position: 'absolute',
    borderColor: '#fff',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 70,
    top: 0
  },
  backButton: {
    marginBottom: 30,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  confirmButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },

  confirmButtonText: {
    fontSize: 20,
  },
  filterStageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40
  },
  filterStageText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35
  },
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
