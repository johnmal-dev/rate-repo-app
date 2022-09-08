import { View, StyleSheet, TouchableHighlight } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  language: {
    color: 'white',
  },
  infoText: {
    marginBottom: 5,
    height: 'auto',
  },
});

const InfoList = ({ item }) => {
  return (
    <View style={styles.infoContainer}>
      <Text
        fontSize='subheading'
        fontWeight='bold'
        style={styles.infoText}
      >
        {item.fullName}
      </Text>
      <Text
        fontSize='subheading'
        color='textSecondary'
        style={styles.infoText}
      >
        {item.description}
      </Text>
      <TouchableHighlight style={styles.button}>
        <Text
          fontSize='subheading'
          style={styles.language}
        >
          {item.language}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default InfoList;
