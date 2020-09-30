import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const InputForm = ({
  initialValue,
  setValue,
  label,
  placeHolder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputFormContainer}>
      <Text style={styles.inputLabel}>{label}:</Text>
      <TextInput
        style={styles.inputText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        value={initialValue}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setValue}
      />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputFormContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  inputText: {
    flex: 2.5,
    fontSize: 16,
  },
});
