import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Card} from 'react-native-elements'

import Header from '../components/Header'

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header name="Home"/>
        <Card style={styles.card}>
        <Text >
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3f3f3'
  },
  card: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});