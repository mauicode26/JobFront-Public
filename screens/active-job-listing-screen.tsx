import React, { useContext, useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ActiveJobListingContext, JobListing } from '../contexts/active-job-listing-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Image } from '@rneui/base';
import { faker } from '@faker-js/faker';


// Dummy function to simulate fetching a job listing's details from a database
const fetchJobListingById = (jobListingId): JobListing => {
  // Simulate a database fetch with a timeout
  return {
    id: jobListingId,
    title: 'Senior Frontend Developer',
    company: 'Innovative Tech',
    location: { city: 'New York', state: 'NY', country: 'United States of America' },
    description: 'Seeking a senior frontend developer to work on cutting-edge web applications.',
    summary: 'I am seeking a senior frontend developer to join our team.',
    techStack: {
      frontend: ['React', 'Redux'],
      backend: ['Node.js', 'Express'],
      databases: ['MongoDB'],
      devops: ['Docker', 'Jenkins'],
      cloudPlatforms: ['AWS'],
    },
    payrange: { min: 120000, max: 150000 },
    avatarUrl: 'https://via.placeholder.com/150',
    tags: ['Frontend', 'Backend', 'DevOps'],
    industry: 'Technology',
    creatorId: faker.string.uuid(),
  }
};

export const ActiveJobListingScreen = ({route, navigation}) => {
  const imgAvatar = require('../assets/avatar-placeholder.webp')
  const teamMembers = [1,2,3,4].map((userId) => {
    return {
      name: faker.person.fullName(),
      avatar: imgAvatar,
      userId: userId
    }
  })

  const [jobListingDetails, setJobListingDetails] = useState(null);
  const { jobListingId } = route.params;

  useEffect(() => {
    // If routed here from the feed screen, populate with the jobListing route param
    if(route.params.jobListing) {
      let jobListingDetails = route.params.jobListing
      console.log('Setting job listing details with route param: jobListing')
      console.log(jobListingDetails)
      setJobListingDetails(jobListingDetails);
    } else {
      // Else, fetch job listing details from API
      console.log('Setting job listing details by fetching data from API')
      const jobListingDetails = fetchJobListingById(jobListingId);
      setJobListingDetails(jobListingDetails);
    }


  }, [jobListingId]);

  // Loading screen if no job details
  if (!jobListingDetails) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }


  const renderStack = (): React.ReactNode => {
    return (
      <>
        <Text style={styles.sectionHeading}>Stack:</Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {jobListingDetails.techStack.frontend.map((item, index) => (
            <View style={styles.techStackItemContainer} key={item} ><Text style={styles.techStackItemText}>{item}</Text></View>
          ))}
          {jobListingDetails.techStack.backend.map((item, index) => (
            <View style={styles.techStackItemContainer} key={item}><Text  style={styles.techStackItemText}>{item}</Text></View>
          ))}
          {jobListingDetails.techStack.databases.map((item, index) => (
            <View style={styles.techStackItemContainer} key={item}><Text style={styles.techStackItemText}>{item}</Text></View>
          ))}
          {jobListingDetails.techStack.devops.map((item, index) => (
            <View style={styles.techStackItemContainer} key={item}><Text style={styles.techStackItemText}>{item}</Text></View>
          ))}
          {jobListingDetails.techStack.cloudPlatforms.map((item, index) => (
            <View style={styles.techStackItemContainer} key={item}><Text style={styles.techStackItemText}>{item}</Text></View>
          ))}
        </View>


      </>
    )
  }

  const navigateToUserProfile = (userId: number) => {
    navigation.navigate('UserProfile', {
      userId: userId
    })
  }

  const renderTeamMembers = (): React.ReactNode => {
    const els = teamMembers.map((member) => {
      return (
        <Pressable key={member.userId} style={styles.personRow} onPress={() => navigateToUserProfile(member.userId)}>

          {/* Profile Image Half */}
          <View style={styles.profileImageContainer}>
            <Image source={imgAvatar} style={styles.profileImage}/>
          </View>

          {/* Person Details Half - Column */}
          <View>
            <Text style={styles.personName}>{faker.person.fullName()}</Text>
            <Text style={styles.personTitle}>{faker.person.jobTitle()}</Text>
          </View>

        </Pressable>
      )
    })
    return els
  }


  return (
    <>
      <ScrollView style={styles.mainWrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.jobListingTitle}>{jobListingDetails.title}</Text>

          {/* Company & Location */}
          <View style={styles.companyAndLocationContainer}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="office-building" size={22} color="#000" style={{opacity: 0.25, marginRight: 5}}/>
              <Text style={styles.jobListingCompany}>{jobListingDetails.company}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="map-marker" size={22} color="#000" style={{opacity: 0.25, marginRight: 5}}/>
              <Text style={styles.jobListingLocation}>{jobListingDetails.location.city}, {jobListingDetails.location.state}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="share-variant" size={22} style={styles.headerOptionsIcon}/>
              <Icon name="link-variant" size={22} style={styles.headerOptionsIcon}/>
              <Icon name="star-outline" size={22}  style={styles.headerOptionsIcon}/>
              <Icon name="web" size={22} style={styles.headerOptionsIcon}/>
            </View>
          </View>

          <Divider style={{marginTop: 10}}/>

        {/*
          <View style={styles.subsection}>
            <Text style={styles.sectionHeading}>Industry:</Text>
            <View style={styles.industryContainer}>
              <Text style={styles.industry}>{jobListingDetails.industry}</Text>
            </View>
          </View> */}

          <View style={styles.subsection}>
            <Text style={styles.sectionHeading}>Salary:</Text>
            <View style={styles.payrangeContainer}>
              <Text style={styles.payrange}>{jobListingDetails.payrange.min}k - {jobListingDetails.payrange.max}k</Text>
            </View>
          </View>

          <View style={styles.subsection}>
            {renderStack()}
          </View>

          <Divider style={{marginTop: 20}}/>

          <View style={styles.subsection}>
            <Text style={styles.sectionHeading}>Description:</Text>
            <Text style={styles.jobListingDescription}>{jobListingDetails.description}</Text>
          </View>

          <Divider style={{marginTop: 20}}/>

          <View style={styles.subsection}>
            <Text style={styles.sectionHeading}>Meet the team:</Text>
            {/* Persons column */}
            <View>
              {renderTeamMembers()}
            </View>
          </View>



        </View>

      </ScrollView>


      <Pressable style={styles.submitApplicationButton}>
        <Text style={styles.submitApplicationButtonText}>Submit Application</Text>
      </Pressable>
      </>
  )
}

const styles = StyleSheet.create({
  profileImageContainer: {
    width: 60,
    height: 60,
    padding: 5,
    borderWidth: 1,
    borderColor: '#287f8b',
    marginRight: 15,
    borderRadius: 10,
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  personRow: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  personName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: '#000',
    textTransform: 'capitalize'
  },
  personTitle: {

  },
  subsection: {
    marginVertical: 5
  },
  headerOptionsIcon: {
    marginTop: 10,
    // backgroundColor: '#000',
    color: '#287f8b',
    padding: 5,
    borderRadius: 5,
    fontSize: 28,
    marginRight: 7
  },
  mainWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  contentWrapper: {
    width: '100%',
    padding: 30,
    height: '100%',
    paddingBottom: 150,
  },
  companyAndLocationContainer: {
    marginVertical: 5
  },
  jobListingTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 5,
    color: '#000',
    textTransform: 'capitalize'
  },
  jobListingCompany: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#989898',
    textTransform: 'capitalize',
    position: 'relative',
    top: 1,
  },
  jobListingLocation: {
    fontSize: 16,
    marginBottom: 5,
    color: '#989898',
    // textTransform: 'capitalize',
    position: 'relative',
    top: 1,
  },
  jobListingDescription: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  payrangeContainer: {
    alignSelf: 'flex-start',
  },
  payrange: {
    fontSize: 24,
    color: '#287f8b',
  },
  industryContainer: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#a3d0f7',
    alignSelf: 'flex-start',
  },
  industry: {
    color: '#2c4357',
    fontWeight: '500',
    fontSize: 16
  },
  sectionHeading: {
    fontWeight: '500',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  submitApplicationButton: {
    backgroundColor: '#287f8b',
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    shadowOpacity: .5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3
  },
  submitApplicationButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  techStackItemContainer: {
    marginBottom: 10,
    backgroundColor: '#a3d0f7',
    padding: 3,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginRight: 8,
    shadowColor: "#23384a",
  },
  techStackItemText: {
    color: '#2c4357',
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '500',
    borderRadius: 5,
    position: 'relative',
    top: 2,
  }

})
