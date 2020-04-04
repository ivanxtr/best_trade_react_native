import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Header = () => {
  const { headerContainer, imageHeader } = styles;
  return(
    <View style={headerContainer}>
      <Image style={imageHeader} source={{ uri: 'https://reactnative.dev/img/header_logo.svg' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#10284e',
    overflow: 'hidden',
    height: 80,
  },
  imageHeader: {
    width: 25,
    height: 25,
  }
});

export default Header;
