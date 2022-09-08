import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

const AppBarTab = ({ text, to }) => {
  return (
    <Link style={styles.button} to={to}>
      <Text
        fontWeight='bold'
        style={styles.text}
      >{text}</Text>
    </Link>
  );
};

AppBarTab.defaultProps = {
  text: 'Button',
  to: '/'
};

export default AppBarTab;
