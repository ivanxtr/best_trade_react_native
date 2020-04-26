import React, {useState} from 'react';
import {
  Modal,
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {DEV_HOST_REMOTE} from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import xml from '../assets/svgs/solid/times-circle.svg';
import {SvgXml} from 'react-native-svg';

const LoginModal = ({modalVisible, setModalVisible, navigation}) => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '920052156190-nokivmmssk373davif7mk8ugjap281b7.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId:
      '920052156190-nokivmmssk373davif7mk8ugjap281b7.apps.googleusercontent.com',
  });
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const {
    modalContainer,
    modalView,
    textInputStyle,
    formContainer,
    formMargin,
    buttonLogIn,
    textLogIn,
    formMargin_2,
    textOr,
    title,
    googleButton,
    alignCenter,
    textMinor,
  } = styles;

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const Login = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append('username', email);
    bodyFormData.append('password', password);

    try {
      const call = await axios({
        method: 'post',
        url: DEV_HOST_REMOTE,
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      if (call.data.message === 'Authorized') {
        setModalVisible(!modalVisible);
        try {
          const expiration = (new Date().getDate() + 3).toString();
          await AsyncStorage.setItem('@email', email);
          await AsyncStorage.setItem('@expiration', expiration);
          return navigation.navigate('Home');
        } catch (e) {
          return e;
        }
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={modalContainer}>
        <View style={modalView}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <SvgXml xml={xml} width="25" height="25" fill="#ff1d84" />
          </TouchableOpacity>
          <Text style={title}> Inicio de Sesion </Text>
          <View style={formContainer}>
            <TextInput
              style={[textInputStyle, formMargin]}
              onChangeText={text => onChangeEmail(text.toLocaleLowerCase())}
              placeholder="Email"
              placeholderTextColor="gray"
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
            />
            <TextInput
              style={[textInputStyle, formMargin_2]}
              onChangeText={text => onChangePassword(text)}
              placeholder="Contraseña"
              placeholderTextColor="gray"
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={password}
            />
            <TouchableOpacity
              style={buttonLogIn}
              onPress={() => {
                Login();
              }}>
              <Text style={textLogIn}> Entrar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[formMargin, textOr]}>
              <Text style={textMinor}> Olvidaste tu Contraseña ?</Text>
            </TouchableOpacity>
            <View style={alignCenter}>
              <GoogleSigninButton
                style={[googleButton, formMargin]}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
              />
            </View>
            <TouchableOpacity>
              <Text style={textMinor}>No Eres Miembro? Registrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 70,
  },
  modalView: {
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 370,
    height: 530,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Lato-Black',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Lato-Black',
  },
  textInputStyle: {
    fontFamily: 'Lato-Black',
    fontSize: 16,
    borderBottomColor: '#ff1d84',
    borderBottomWidth: 1,
    color: 'gray',
    width: 275,
    paddingBottom: 5,
  },
  formContainer: {
    marginTop: 50,
  },
  formMargin: {
    marginTop: 20,
  },
  formMargin_2: {
    marginTop: 40,
  },
  buttonLogIn: {
    marginTop: 40,
    width: 300,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#ff1d84',
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textLogIn: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Lato-Black',
  },
  textOr: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
  },
  textMinor: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Lato-Regular',
  },
  title: {
    fontFamily: 'Lato-LightItalic',
    fontSize: 25,
    position: 'relative',
    top: 30,
    textAlign: 'center',
    width: 300,
  },
  googleButton: {
    width: 200,
    height: 48,
    alignItems: 'center',
    marginBottom: 10,
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export default LoginModal;
