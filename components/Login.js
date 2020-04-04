import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import LoginModal from './LoginModal';

const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    container,
    imageStyle,
    buttonDisponibilidad,
    buttonLogIn,
    container_2,
    text,
    textLogIn,
    title,
    slogan,
  } = styles;
  const image = require('../assets/house_2.jpeg');

  return (
    <View style={container}>
      <View style={container_2}>
        <Text style={title}>Best Trade</Text>
        <Text style={slogan}>
          Encuentra Bienes Raices, Noticias del Sector Inmobiliario y mas.
        </Text>
        <TouchableOpacity
          style={buttonDisponibilidad}
          onPress={() => navigation.navigate('Home')}>
          <Text style={text}> Entrar como Invitado </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonLogIn}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={textLogIn}> Iniciar Sesion </Text>
        </TouchableOpacity>
      </View>
      <ImageBackground source={image} style={imageStyle} />
      <LoginModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
  },
  container_2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 450,
    height: 400,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Lato-Black',
  },
  textLogIn: {
    color: '#ff1d84',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonDisponibilidad: {
    width: 300,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#ff1d84',
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonLogIn: {
    width: 300,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff1d84',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  title: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 25,
    position: 'relative',
    top: -60,
  },
  slogan: {
    fontFamily: 'Lato-LightItalic',
    fontSize: 25,
    textAlign: 'center',
    position: 'relative',
    top: -40,
  },
});

export default Login;
