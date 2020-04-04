import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';

const Blog = ({navigation}) => {
  const {containerHome} = styles;
  return (
    <View style={containerHome}>
      <Header nav={navigation} />
      <Text>Blog</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    paddingTop: 91,
  },
});

export default Blog;
