import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

const HomeScreen = () => {
  const handleExploreDocs = () => {
    Linking.openURL('https://reactnative.dev/docs/getting-started');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My React Native App</Text>
      <Text style={styles.name}>Navtej S Nair</Text>
      <View style={styles.buttonContainer}>
        <Button title="Check Docs" onPress={handleExploreDocs} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '50%',
  },
});

export default HomeScreen;
