import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isUserAuthenticated = () => {
    return username === 'Admin' && password === 'password';
  }

  const handleLogin = () => {
    // Implement your login logic here
    console.log(username, password);
    if(isUserAuthenticated()) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'EnterAccessKey' }],
      })
    }
    else {
      alert('Invalid credentials');
    }
    // For demonstration, let's just print the credentials
    // In a real app, you would likely send these to your backend server for verification

    // After login, navigate to your app's home screen or show an error message
    // navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername} // Update the username state when the text changes
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword} // Update the password state when the text changes
        secureTextEntry // Hide the password input
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light grey background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%', // Take up all available width
    marginBottom: 15, // Add some margin between the inputs
    paddingHorizontal: 10, // Add some padding inside the input
    paddingVertical: 15, // Add some vertical padding to increase touch area
    borderWidth: 1, // Add a border to make the input visible
    borderColor: '#cccccc', // Light grey border
    borderRadius: 5, // Slightly rounded corners for aesthetics
  },
});

export default LoginScreen;
