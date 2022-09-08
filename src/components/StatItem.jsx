import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
  },
});

const showStat = (count) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
};

const StatItem = (props) => {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{showStat(props.count)}</Text>
      <Text color='textSecondary'>{props.text}</Text>
    </View>
  );
};

StatItem.defaultProps = {
  text: 'Stat',
  count: '2121',
};

export default StatItem;
