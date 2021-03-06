import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, AppRegistry} from 'react-native';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import Routes from './Routes.js';
import {NavigationContainer} from '@react-navigation/native';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://best-trade.com.mx/graphql/'}),
  cache: new InMemoryCache(),
});

const App = () => {
  const {container} = styles;

  return (
    <ApolloProvider client={client}>
      <View style={container}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </View>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('App', () => App);
export default App;
