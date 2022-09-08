import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

const AppBarButton = ({ text }) => {
  return (
    <Pressable style={styles.button}>
      <Text
        fontWeight='bold'
        style={styles.text}
      >
        {text}
      </Text>
    </Pressable>
  );
};

AppBarButton.defaultProps = {
  text: 'Button',
};

export default AppBarButton;
