import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

export default function ConfigColor({ setColor, color, customColor }) {

  function changeColor() {

    if (color > 4) {
      setColor(0);
    } else {
      setColor(color + 1);
    }
  }

  return (
    <View style={styles.config}>
      <TouchableOpacity style={styles.configBtnColor} onPress={() => changeColor()}>
        <FontAwesomeIcon icon={faKeyboard} color={customColor} size={25}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  config: {
    marginTop: 50,
    width: 340,
    height: 51,
    flexDirection: 'row-reverse',
    backgroundColor: '#262626'
  },
  configBtnColor: {
    width: 25,
    height: 25,
  }
});