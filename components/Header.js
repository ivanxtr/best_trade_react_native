import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import arrowBack from '../assets/svgs/solid/angle-left.svg';

export const Arrow = ({props, nav}) => {
  return (
    <TouchableOpacity onPress={() => nav.navigate('Home')} style={props}>
      <SvgXml xml={arrowBack} width="35" height="35" fill="#ff1d84" />
    </TouchableOpacity>
  );
};

export const Config = () => {
  // /assets/svgs/solid/filter.svg
  return <TouchableOpacity />;
};

const Header = ({nav, showArrow}) => {
  const {headerContainer, title, arrow} = styles;
  return (
    <View style={headerContainer}>
      {showArrow ? <Arrow props={arrow} nav={nav} /> : false}
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
  arrow: {
    position: 'absolute',
    top: 48,
    left: 0,
    width: 100,
    height: 30,
  },
});

export default Header;
