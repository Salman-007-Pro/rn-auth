import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={size || 'large'} color="#00ff00" />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
