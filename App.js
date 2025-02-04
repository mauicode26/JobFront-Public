import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home-screen';
import { FeedScreen } from './screens/feed-screen';
import LoginScreen from './screens/login-screen';
import AccessKeyScreen from './screens/access-key-screen';
import UserProfileScreen from './screens/user-profile-screen'
import { ActiveJobListingScreen } from './screens/active-job-listing-screen';
import { FeedContextProvider } from './contexts/feed-context';
import { FiltersSelectionScreen } from './screens/filters-selection-screen';
import { FiltersSelectionProvider } from './contexts/filters-selection-context';
import SimpleFilters from './screens/simple-filters'
import { ActiveJobListingContextProvider } from './contexts/active-job-listing-context';
import { StyleSheet, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <>
      <FiltersSelectionProvider>
      <ActiveJobListingContextProvider>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Feed"
              component={FeedScreen}
              options={{title: 'Feed', headerShown: false}}
            />
            <Stack.Screen
              name="ActiveJobListing"
              component={ActiveJobListingScreen}
              options={{title: 'ActiveJobListing', headerShown: false}}
              initialParams={{jobListingId: 1}}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfileScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: 'Login', headerShown: false}}
            />

            <Stack.Screen
              name="SimpleFilters"
              component={SimpleFilters}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FiltersSelection"
              component={FiltersSelectionScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Home', headerShown: false}}
            />
            <Stack.Screen
              name="EnterAccessKey"
              component={AccessKeyScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Text style={styles.appVersion}>v0.0.1-alpha</Text>
      </ActiveJobListingContextProvider>
      </FiltersSelectionProvider>

    </>

  );
}

const styles = StyleSheet.create({
  appVersion: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    fontSize: 11,
    zIndex: 100,
    opacity: 0.3
  }
})

