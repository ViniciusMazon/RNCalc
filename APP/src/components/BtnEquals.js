import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Btn({ color, account, setResult }) {

  function verification(expression) {
    //The last value cannot be an operator
    const lastValue = expression.length - 1;
    if (expression[lastValue] !== '+' && expression[lastValue] !== '-' && expression[lastValue] !== '*' && expression[lastValue] !== '/') {
      return true;
    } else {
      return false;
    }
  }

  function equals() {
    verification(account) ? setResult(eval(account)) : null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => equals()}>
      <Text style={[styles.text, color = { color }]}>=</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 60,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25
  }
});
