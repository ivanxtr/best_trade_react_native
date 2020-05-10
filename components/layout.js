import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
  FlatList,
} from 'react-native';
import {GET_ALL_LISTINGS} from '../queries';
import {Query} from 'react-apollo';
import Header from './Header';
import {PROD_HOST} from 'react-native-dotenv';

const Layout = ({navigation}) => {
  const {
    ImageBackgroundStyles,
    containerHome,
    itemContainer,
    itemText,
    propertyType,
    hide,
  } = styles;
  const typesToString = value => {
    switch (value) {
      case 'VNT':
        return 'Venta';
      case 'RNT':
        return 'Renta';
      default:
        return 'Bodega';
    }
  };
  return (
    <View style={containerHome}>
      <Header nav={navigation} />
      <Query query={GET_ALL_LISTINGS}>
        {({loading, error, data}) => {
          if (loading) {
            return <Text> Loading....</Text>;
          }
          if (error) {
            console.log(error);
          }
          if (data) {
            return (
              <FlatList
                data={data.allListings}
                renderItem={listing => (
                  <TouchableOpacity
                    style={listing.item.isPublished ? '' : hide}
                    onPress={() =>
                      navigation.navigate('Description', {data: listing})
                    }>
                    <ImageBackground
                      source={{
                        uri: `${PROD_HOST}${listing.item.photoMain}`,
                      }}
                      style={ImageBackgroundStyles}>
                      <View style={itemContainer}>
                        <Text style={itemText}> {listing.item.title} </Text>
                        <Text style={propertyType}>
                          {typesToString(listing.item.transactionType)}
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            );
          }
        }}
      </Query>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    paddingTop: 91,
  },
  ImageBackgroundStyles: {
    alignSelf: 'stretch',
    height: 200,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: '#767676',
  },
  itemContainer: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    position: 'relative',
    top: 133,
  },
  itemText: {
    fontFamily: 'Lato-Black',
    fontSize: 20,
    color: 'white',
    marginLeft: 5,
    marginTop: 5,
  },
  propertyType: {
    fontFamily: 'Lato-Black',
    fontSize: 15,
    color: 'white',
    backgroundColor: '#ff1d84',
    padding: 1,
    width: 55,
    textAlign: 'center',
    marginLeft: 8,
    marginTop: 5,
    marginBottom: 10,
  },
  hide: {
    display: 'none',
  },
});

export default Layout;
