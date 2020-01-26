import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'

export default function BtnBackspace({ color, account, setAccount, action }) {

  function backspace() {
    const new_account = account.substring(0, (account.length - 1));
    setAccount(new_account);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => backspace()}>
      <View>
        <FontAwesomeIcon icon={faBackspace} color={color} size={25} />
      </View>
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