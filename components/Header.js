import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = ({nav}) => {
  const {headerContainer, title} = styles;
  return (
    <View style={headerContainer} onPress={nav.toggleDrawer}>
      <Text style={title}> Best Trade </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    height: 90,
    alignItems: 'center',
    color: '#fff',
    borderBottomColor: '#ff1d84',
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 25,
    position: 'relative',
    top: 40,
    color: '#767676',
  },
});

export default Header;
