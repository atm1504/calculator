import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11 * 11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" style={styles.number} />
              <Button title="1" style={styles.number} />
              <Button title="2" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="1" />
              <Button title="2" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="1" />
              <Button title="2" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="1" />
              <Button title="2" />
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
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
    backgroundColor: '#D5D5D5',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 24,
    color: '#000',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 30,
    color: '#fff',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: 'yellow',
    flex: 3,
    borderColor: 'red',
    borderWidth: 10,
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  number: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default App;
