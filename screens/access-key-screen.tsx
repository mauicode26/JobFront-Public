import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';

const AccessKeyScreen = ({navigation}) => {
  const [accessKey, setAccessKey] = useState('');

  const verifyAccessKey = () => {
    // Predefined access key
    const validAccessKey = '123456';

    // Check if the entered access key matches the valid access key
    if (accessKey === validAccessKey) {
      // Navigate to the next screen or unlock features
      Alert.alert('Welcome, Alpha User!', 'Before you get started, we want to say thank you for using JobFront!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Feed' }],
      })
    } else {
      // Show an error message
      Alert.alert('Access Denied', 'The access key is incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.betaTooltip}>Greetings!  JobFront is in private alpha.  If you have an access key, please enter it below.</Text>
      <Text style={styles.title}>Enter your access key</Text>
      <TextInput
        style={styles.input}
        placeholder="Access Key"
        value={accessKey}
        onChangeText={setAccessKey}
        keyboardType="numeric"
        secureTextEntry // Use this prop to hide the access key input
      />
      <Button title="Verify Access Key" onPress={verifyAccessKey} />
    </View>
  );
};

const styles = StyleSheet.create({
  betaTooltip: {
    color: '#959595',
    textAlign: 'center',
    position: 'absolute',
    top: 100,
    fontSize: 14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#cccccc', // Light grey border
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default AccessKeyScreen;
