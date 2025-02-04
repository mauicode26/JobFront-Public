import { faker } from '@faker-js/faker';
import { Divider } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Assuming you have a function to fetch user details from an API or local storage
// import { getUserDetails } from '../services/UserService';

export default function UserProfileScreen({ route }) {
  const imgAvatar = require('../assets/avatar-placeholder.webp')
  const { userId } = route.params;
  const [userProfile, setUserProfile] = useState({
    name: '',
    professionalTitle: faker.person.jobTitle(),
    email: '',
    avatarUrl: {},
    about: '',
    experience: '',
    yearsOfExperience: faker.date.past().getFullYear() - faker.date.past().getFullYear()
    // Add more fields as needed
  });

  useEffect(() => {
    // Simulate fetching user details
    // In a real app, you would replace this with a call to your user service
    // e.g., getUserDetails(userId).then(setUserProfile);
    setUserProfile({
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: imgAvatar,
      professionalTitle: faker.person.jobTitle(),
      about: faker.lorem.paragraphs(5),
      experience: faker.lorem.paragraphs(3),
      yearsOfExperience: faker.number.int({ min: 8, max: 20 }),
    });
  }, [userId]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={userProfile.avatarUrl} style={styles.avatar} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.userName}>{userProfile.name}</Text>
          <Text style={styles.userTitle}>{userProfile.professionalTitle}</Text>
          <Text style={styles.yearsOfExperience}>{userProfile.yearsOfExperience} Years of experience</Text>
        </View>

      </View>
      <View style={styles.adminOptionsContainer}>
        <Icon name="pencil-outline" style={styles.adminOption} size={22}/>
        <Icon name="file-upload" style={styles.adminOption} size={22} />
        <Icon name="google-analytics" style={styles.adminOption} size={22} />
      </View>
      <Divider style={styles.headerDivider} />
      {/* Sections */}

      <View style={styles.sectionsContainer}>
        <View>
          <Text style={styles.sectionHeading}>Experience</Text>
          <Text style={styles.sectionText}>{userProfile.experience}</Text>
        </View>
        <View>
          <Text style={styles.sectionHeading}>About</Text>
          <Text style={styles.sectionText}>{userProfile.about}</Text>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
        {/* Add more user details here */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press, e.g., navigation.navigate('EditProfile', { userId });
          }}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      {/* End Sections */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  adminOptionsContainer: {
    marginBottom: 15,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  adminOption: {
    marginHorizontal: 10,
    marginBottom: 10,
    color: '#287f8b',
  },
  yearsOfExperience: {
    fontSize: 13,
    color: '#6e6e6e',
  },
  sectionsContainer: {
    padding: 30,
  },
  headerDivider: {
    borderBottomWidth: 3,
    borderBottomColor: '#89b0b5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#89b0b5',
    shadowOpacity: 0.25,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  userTitle: {
    fontSize: 16,
    color: '#000',
    marginVertical: 5,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    // paddingVertical: 7,
    // backgroundColor: '#dadada',
    // alignSelf: 'flex-start',
    // textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 75,
    marginRight: 20,
    position: 'relative',
    top: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  // Add more styles as needed
});
