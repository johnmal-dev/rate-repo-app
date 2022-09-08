import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatItem from './StatItem';

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const StatList = ({ item }) => {
  return (
    <View style={styles.statContainer}>
      <StatItem
        text='Stars'
        count={item.stargazersCount}
      />
      <StatItem
        text='Forks'
        count={item.forksCount}
      />
      <StatItem
        text='Reviews'
        count={item.reviewCount}
      />
      <StatItem
        text='Rating'
        count={item.ratingAverage}
      />
    </View>
  );
};

export default StatList;
