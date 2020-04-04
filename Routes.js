import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Layout from './components/layout';
import About from './components/About';

const Stack = createStackNavigator();

const Routes = () => (
    <Stack.Navigator>
      <Stack.Screen
        component = {Layout}
        name = "Home"
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen component = {About} name = "About" />
    </Stack.Navigator>
)
export default Routes

/*
 <Header/>
        <Layout />
        <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
*/
