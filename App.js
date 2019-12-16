/* eslint-disable no-eval */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {resultText: '', result:''};
    this.buttonPressed = this.buttonPressed.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  // Function to calculate the result of the entered expression
  calculateResult() {
    const lastChar = this.state.resultText.split('').pop();
    if (operations.indexOf(lastChar) >= 0) {
      return;
    }
    const text = this.state.resultText;
    var result = eval(text);
    this.setState({ result: result });
  }
  // Perform different actions according to the button selected or pressed
  buttonPressed(text) {
    if (text === '=') {
      this.calculateResult();
    } else if (text === 'DEL') {
      let t = this.state.resultText.split('');
      t.pop();
      this.setState({ resultText: t.join('') });
    } else if (text === 'CLR') {
      this.setState({resultText:'', result:''});
    } else {
      const lastChar = this.state.resultText.split('').pop();
      if ((operations.indexOf(text) !== -1) && (this.state.resultText === '' || operations.indexOf(lastChar) !== -1)) {
        return;
      }
      this.setState( {resultText:this.state.resultText + text});

    }
  }
  render() {
    /* Looping of the items to show numbers and operators */
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            onPress={() => {
              this.buttonPressed(nums[i][j]);
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let ops = [];
    for (let j = 0; j < 6; j++) {
      ops.push(
        <TouchableOpacity onPress={() => {
              this.buttonPressed(operations[j]);
            }} style={styles.operationButton}>
          <Text style={styles.operationText}>{operations[j]}</Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}

const operations = ['CLR','DEL','+', '-', '*', '/'];

/* Style sheet for the calculator*/
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
    fontSize: 28,
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
    backgroundColor: 'black',
  },
  numbers: {
    backgroundColor: 'black',
    flex: 3,
    borderColor: 'black',
    borderWidth: 10,
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    borderColor: 'red',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 34,
  },
  operationText: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
  },
  operationButton: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: 'black',
    marginTop: 5,
    marginBottom: 10,
    borderColor: 'red',
  },
});

export default App;
