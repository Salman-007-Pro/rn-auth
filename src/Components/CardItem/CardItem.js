import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardItem = ({children}) => {
  return <View style={styles.cardItemContainer}>{children}</View>;
};

export default CardItem;

const styles = StyleSheet.create({
  cardItemContainer: {
    borderBottomWidth: 1,
    borderColor: '#Ddd',
    padding: 10,
  },
});
