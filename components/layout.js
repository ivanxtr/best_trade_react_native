import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { GET_ALL_LISTINGS } from '../queries'
import { Query } from 'react-apollo';

const Layout = ({ navigation }) => {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Eggs' },
    { id: 3, text: 'Bread' },
    { id: 4, text: 'Juice' }
  ]);

  return (
    <View>
      <TouchableOpacity>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
      <Query query={GET_ALL_LISTINGS}>
          {
            ({loading, error, data}) => {
              if(loading) return <Text> Loading....</Text>
              if(error) console.log(error);
              if(data) {
                const { allListings } = data 
                return allListings.map((listing, index) => {
                  return (
                    <View key={index}>
                      <Text> {listing.title} </Text>
                      <Text> { listing.id }</Text>
                    </View>
                  )
                })
              }
            }
          }
        </Query>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}

export default Layout
