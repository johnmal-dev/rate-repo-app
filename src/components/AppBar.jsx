import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarButton from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarButton text='Repositories' />
    </View>
  );
};

export default AppBar;
