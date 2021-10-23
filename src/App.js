import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import packageJson from '../package.json';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RNProduction App</Text>
      <Text style={styles.versionNumber}>{packageJson.version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  versionNumber: {
    fontSize: 18,
  },
});

export default App;
