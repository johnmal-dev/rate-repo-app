import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import theme from '../theme';
import InfoList from './InfoList';
import StatList from './StatList';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
    padding: 5,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  topContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.ownerAvatarUrl}`,
          }}
        />
        <InfoList item={item}/>
      </View>
      <StatList item={item} />
    </View>
  );
};

export default RepositoryItem;
