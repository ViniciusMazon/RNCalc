import React from 'react';
import { StyleSheet, View } from 'react-native';

import Btn from './Btn';
import BtnBackspace from './BtnBackspace';
import BtnClear from './BtnClear';
import BtnEquals from './BtnEquals';

export default function Keyboard({ color, account, setAccount, setResult }) {

  return (
    <View style={styles.keyboard}>
      <BtnClear color={color} setAccount={setAccount} setResult={setResult} />
      <Btn color={color} text={'7'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'4'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'1'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'.'} account={account} setAccount={setAccount} />

      <Btn color={color} text={'('} account={account} setAccount={setAccount} />
      <Btn color={color} text={'8'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'5'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'2'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'0'} account={account} setAccount={setAccount} />

      <Btn color={color} text={')'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'9'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'6'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'3'} account={account} setAccount={setAccount} />
      <BtnEquals color={color} account={account} setResult={setResult} />

      <BtnBackspace color={color} account={account} setAccount={setAccount} />
      <Btn color={color} text={'/'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'*'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'-'} account={account} setAccount={setAccount} />
      <Btn color={color} text={'+'} account={account} setAccount={setAccount} />
    </View>
  );
}


const styles = StyleSheet.create({
  keyboard: {
    width: 360,
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
