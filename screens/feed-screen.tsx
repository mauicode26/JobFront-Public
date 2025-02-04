import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import JobListingThumbnail from '../components/job-listing-thumbnail'
import { faker } from '@faker-js/faker';
import Navbar, { NavbarProps } from '../components/nav-bar';
import FiltersSelectionContext from '../contexts/filters-selection-context';

export const FeedScreen = ({navigation}) => {
  const filtersSelectionContext = useContext(FiltersSelectionContext)
  console.log(filtersSelectionContext.filters)
  const navBarProps: NavbarProps = {
    title: 'JobFront',
    subtitle: filtersSelectionContext.filters.location.state,
    navigation: navigation
  }
  let JobListingThumbnails = []
  for(let i = 0 ; i < 20; i++) {
    JobListingThumbnails.push({
      id: i,
      title: faker.company.buzzNoun() + ' Engineer',
      company: faker.company.name(),
      summary: faker.lorem.words(20),
      description: faker.lorem.paragraphs(5),
      payrange: {min: faker.finance.amount({min: 60, max: 80, autoFormat: true, dec: 0, symbol: '$',}), max: faker.finance.amount({min: 80, max: 220, autoFormat: true, dec: 0, symbol: '$'})},
      tags: ['Frontend', 'Backend', 'DevOps'],
      industry: 'Engineering',
      creatorId: faker.string.uuid(),
      location: {
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country()
      },
      techStack: {
        frontend: ['React', 'Next.js'],
        backend: ['Node.js', 'Express'],
        databases: ['MongoDB'],
        devops: ['Docker'],
        cloudPlatforms: ['AWS', 'GCP']
      }
    })
  }

  return (
    <>
      {/* Main Wrapper */}
      <ScrollView style={styles.mainWrapper}>

        <Navbar {...navBarProps}></Navbar>

        {/* Content Wrapper */}
        <View style={styles.contentWrapper}>
          <Text style={styles.h2}>Job Feed</Text>
          {
            JobListingThumbnails.map((jobListing) => (
              <JobListingThumbnail key={jobListing.id} jobListing={jobListing} navigation={navigation}></JobListingThumbnail>
            ))
          }
          <StatusBar style="auto" />
        </View>

      </ScrollView>
    </>

  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    backgroundColor: '#fff',
  },
  navBar: {
    width: '100%',
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  contentWrapper: {
    width: '100%',
    padding: 20,
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
