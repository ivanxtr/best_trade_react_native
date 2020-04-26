/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Header from './Header';
import {DEV_HOST} from 'react-native-dotenv';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const Description = ({route, navigation}) => {
  const {
    params: {
      data: {item},
    },
  } = route;
  const {
    containerHome,
    logo,
    dots,
    inactiveDots,
    thumbnails,
    mainTitle,
    carouselContainer,
    description,
    details,
  } = styles;
  const [activeIndex, setactiveIndex] = useState(0);
  const carouselItems = [];
  for (let i = 1; i <= 6; i += 1) {
    const name = `photo${i}`;
    if (item[name] !== '') {
      carouselItems.push({ src: item[name] });
    }
  }

  const _renderItem = ({item}) => {
      return (
        <Image style={thumbnails} source={{uri: `${DEV_HOST}${item.src}`}} />
      );
  };

  console.log(item);

  return (
    <View style={containerHome} key={item.id}>
      <Header nav={navigation} showArrow={true} />
      <ScrollView>
        <Text style={mainTitle}>{item.title}</Text>
        <Image style={logo} source={{uri: `${DEV_HOST}${item.photoMain}`}} />
        <Text style={description}>
          {item.description}
        </Text>
        <View style={carouselContainer}>
          <Carousel
            layout={'stack'}
            data={carouselItems}
            sliderWidth={400}
            itemWidth={350}
            renderItem={_renderItem}
            onSnapToItem={index => setactiveIndex(index)}
          />
          <Pagination
            dotsLength={carouselItems.length}
            activeDotIndex={activeIndex}
            dotStyle={dots}
            inactiveDotStyle={inactiveDots}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <View style={details}>
          <Text>{item.address}</Text>
          <Text>{item.city}</Text>
          <Text>{item.price}</Text>
          <Text>{item.propertyType}</Text>
          <Text>{item.sqft}</Text>
          <Text>{item.state}</Text>
          <Text>{item.transactionType}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    paddingTop: 91,
  },
  logo: {
    alignSelf: 'stretch',
    height: 200,
  },
  thumbnails: {
    alignSelf: 'stretch',
    borderRadius: 3,
    height: 200,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#ff1d84',
  },
  inactiveDots: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#767676',
  },
  mainTitle: {
    fontFamily: 'Lato-LightItalic',
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
  },
  carouselContainer: {
    paddingTop: 20,
  },
  description: {
    fontFamily: 'Lato-LightItalic',
    fontSize: 18,
    padding: 15,
  },
  details: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 30,
  },
});

export default Description;
