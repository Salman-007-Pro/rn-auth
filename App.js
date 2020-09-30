import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import firebase from 'firebase';
import Header from './src/Components/Header/Header';
import LoginForm from './src//Components/LoginForm/LoginForm';
import Spinner from './src/Components/Spinner/Spinner';

const App = () => {
  const [isLogged, setIsLogged] = useState(null);
  useEffect(() => {
    firebase.initializeApp({
      apiKey: 'AIzaSyA5MvmfX0x9cOmSrnw-9jF2P8XZ1b4IoeU',
      authDomain: 'rn-authentication-a06fa.firebaseapp.com',
      databaseURL: 'https://rn-authentication-a06fa.firebaseio.com',
      projectId: 'rn-authentication-a06fa',
      storageBucket: 'rn-authentication-a06fa.appspot.com',
      messagingSenderId: '854834262367',
      appId: '1:854834262367:web:ea77fbddd470c1a9fc06ea',
      measurementId: 'G-V4TR372JEW',
    });
    firebase.auth().onAuthStateChanged((user) => {
      user ? setIsLogged(true) : setIsLogged(false);
    });
  }, []);
  const checkIsLogged = () => {
    switch (isLogged) {
      case true:
        return (
          <Button title="Log out" onPress={() => firebase.auth().signOut()} />
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };
  const renderButton = checkIsLogged();
  return (
    <View>
      <Header headingText="Authentication" />
      {renderButton}
    </View>
  );
};

export default App;
