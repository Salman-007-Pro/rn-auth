import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({headingText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>{headingText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
