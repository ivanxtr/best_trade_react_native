import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';

const Description = ({route, navigation}) => {
  const {
    params: {
      data: {item},
    },
  } = route;
  const {containerHome} = styles;
  return (
    <View style={containerHome} key={item.id}>
      <Header nav={navigation} />
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    paddingTop: 91,
  },
});

export default Description;
