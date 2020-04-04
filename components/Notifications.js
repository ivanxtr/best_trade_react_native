import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Header from './Header';

const About = ({navigation}) => {
  return (
    <View>
      <Header nav={navigation} />
      <TouchableOpacity>
        <Text>This is ABOUT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default About;
