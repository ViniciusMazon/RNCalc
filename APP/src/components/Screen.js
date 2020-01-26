import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Screen({ color, result, account }) {

  return (
    <View style={styles.screen}>
      <View style={styles.result}>
        <Text style={[styles.result_text, color={ color }]}>{result}</Text>
      </View>
      <View style={styles.account}>
        <Text style={styles.account_text}>{account}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#262626'
  },
  result: {
    width: 360,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929'
  },
  result_text: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#17DEEE'
  },
  account: {
    width: 360,
    height: 91,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444444'
  },
  account_text: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
    color: '#FFF'
  }
});