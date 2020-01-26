import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Btn({ text, color, account, setAccount }) {

  function verificatiOnoperators() {
    // Two operators cannot be inserted together
    const lastValue = account[account.length - 1]
    if (lastValue !== '+' && lastValue !== '-' && lastValue !== '*' && lastValue !== '/') {
      return true;
    } else {
      return false;
    }
  }

  function verificationOpenParenthesis() {
    //A parenthesis cannot be opened if there is no operator before
    const lastValue = account[account.length - 1]
    if (lastValue === '+' || lastValue === '-' || lastValue === '*' || lastValue === '/') {
      return true;
    } else {
      return false;
    }
  }

  function verificationCloseParenthesis() {
    //A parenthesis cannot be closed if there is an operator before
    const lastValue = account[account.length - 1]
    if (lastValue !== '+' && lastValue !== '-' && lastValue !== '*' && lastValue !== '/' && lastValue !== '(') {
      return true;
    } else {
      return false;
    }
  }

  const verification = (n) => {
    if (n === '+' || n === '-' || n === '*' || n === '/') {
      return verificatiOnoperators();
    } else if (n === '(') {
      return verificationOpenParenthesis()
    } else if (n === ')') {
      return verificationCloseParenthesis()
    } else {
      return true;
    }
  }


  function operation(n) {
    if (account === '0') {
      setAccount(n);
    } else if (verification(n)) {
      setAccount(account + n);
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => operation(text)}>
      <Text style={[styles.text, color = { color }]}>{text}</Text>
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
