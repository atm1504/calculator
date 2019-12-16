import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result} />
        <View style={styles.calculation} />
        <View style={styles.buttons}>
          <View style={styles.numbers} />
          <View style={styles.operations} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: 'yellow',
    flex: 3,
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
