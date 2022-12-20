import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export const SingleCoordItem = props => {
  const {name, testNum} = props;
  const [number, onChangeNumber] = React.useState(testNum);

  return (
    <View style={{marginBottom: 8}}>
      <Text style={{fontSize: 10, fontWeight: 'bold', marginBottom: 2}}>
        {name}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={name}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 32,
    width: 130,
    borderWidth: 1,
    padding: 8,
  },
});
