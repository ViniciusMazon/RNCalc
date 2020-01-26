import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BtnClear({color, setAccount, setResult }) {

  function clear() {
    setAccount('0');
    setResult('0');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => clear()}>
      <Text style={[styles.text, color={ color }]}>CE</Text>
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