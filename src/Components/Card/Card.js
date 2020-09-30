import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({children}) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#Ddd',
    borderBottomWidth: 0,
    marginHorizontal: 10,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});
