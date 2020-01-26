import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ConfigColor from './src/components/ConfigColor';
import Screen from './src/components/Screen';
import Keyboard from './src/components/Keyboard';

export default function App() {

  const [account, setAccount] = useState('0');
  const [result, setResult] = useState('0');
  const [color, setColor] = useState(0);

  const palette = ['#AC91FF','#FF7F50', '#FF4162', '#ECF284', '#17DEEE', '#FFFFFF'];

  return (
    <View style={styles.container}>
      <ConfigColor setColor={setColor} color={color} customColor={palette[color]}/>
      <Screen result={result} account={account} color={palette[color]} />
      <Keyboard color={palette[color]} account={account} setAccount={setAccount} setResult={setResult} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626'
  }
});
