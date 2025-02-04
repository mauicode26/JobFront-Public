import React, { useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActiveJobListingContext } from '../contexts/active-job-listing-context';
type JobListingThumbnailProps = {
  id: string
  title: string
  company: string
  summary: string
  description: string
  payrange: {min: number, max: number}
}

export default function JobListingThumbnail({jobListing, navigation}: {jobListing: JobListingThumbnailProps, navigation: any}){

  const activeJobListingContext = useContext(ActiveJobListingContext);

  const handleListingPress = () => {

    navigation.navigate('ActiveJobListing', {
      jobListing: jobListing
    })
  }

  return (
    <Pressable style={styles.container} onPress={() => handleListingPress()}>
      <Text style={styles.jobListingTitle}>{jobListing.title}</Text>
      <Text style={styles.jobListingcompany}>{jobListing.company}</Text>
      <Text style={styles.jobListingSummary}>{jobListing.summary}</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.payrangeContainer}>
          <Text style={styles.payrange}>{jobListing.payrange.min}k - {jobListing.payrange.max}k</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Icon style={styles.listingOptionsIcon} name="share-variant" size={22} color="#000"/>
          <Icon style={styles.listingOptionsIcon} name="link-variant" size={22} color="#000"/>
          <Icon style={styles.listingOptionsIcon} name="star-outline" size={22} color="#000"/>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#cdcdcd',
    padding: 15,
    color: '#fff',
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .22,
    elevation: 3,
  },
  jobListingTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    // color: '#287f8b',
    color: '#000',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  jobListingSummary: {
    fontSize: 12,
    color: '#000',
    marginTop: 10,
  },
  jobListingcompany: {
    fontSize: 12,
    color: '#000',
    fontStyle: 'italic'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // This ensures the pay range and icons are aligned in the center vertically
    marginTop: 20,
    // borderWidth: 2,
    // borderColor: '#195b1b',
  },
  iconsContainer: {
    flexDirection: 'row', // Lay out the icons in a row
    justifyContent: 'space-between', // This can be adjusted based on the desired spacing between icons
  },
  listingOptionsIcon: {
    marginLeft: 10,
    fontSize: 26,
  },
  payrangeContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  payrange: {
    fontSize: 24,
    color: '#287f8b',
    // fontWeight: 'bold',
    alignSelf: 'flex-start',
    borderRadius: 20
  },
})
