import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
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
      <ScrollView horizontal>
        <AppBarTab
          text='Repositories'
          to='/'
        />
        <AppBarTab
          text='Sign In'
          to='/signin'
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
