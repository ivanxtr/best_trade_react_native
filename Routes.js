import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {SvgXml} from 'react-native-svg';
import homeSvg from './assets/svgs/solid/house-user.svg';
import notificationSvg from './assets/svgs/solid/at.svg';
import news from './assets/svgs/solid/book-open.svg';

import Login from './components/Login';
import Layout from './components/layout';
import Notifications from './components/Notifications';
import Description from './components/Description';
import Blog from './components/Blog';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Login" headerMode="none">
    <Stack.Screen name="Home">
      {() => (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              switch (route.name) {
                case 'Home':
                  return (
                    <SvgXml
                      xml={homeSvg}
                      width={size}
                      height={size}
                      fill={color}
                    />
                  );
                case 'Notifications':
                  return (
                    <SvgXml
                      xml={notificationSvg}
                      width={size}
                      height={size}
                      fill={color}
                    />
                  );
                case 'News':
                  return (
                    <SvgXml
                      xml={news}
                      width={size}
                      height={size}
                      fill={color}
                    />
                  );
                default:
                  return false;
              }
            },
          })}
          tabBarOptions={{
            showIcon: true,
            activeTintColor: '#ff1d84',
            inactiveTintColor: '#767676',
          }}>
          <Tab.Screen name="Home" component={Layout} />
          <Tab.Screen name="News" component={Blog} />
          <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator>
      )}
    </Stack.Screen>

    <Stack.Screen name="Login" component={Login} swipeEnabled={false} />
    <Stack.Screen name="Description" component={Description} />
  </Stack.Navigator>
);
export default Routes;
