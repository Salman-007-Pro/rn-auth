import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'firebase';
import Card from '../Card/Card';
import CardItem from '../CardItem/CardItem';
import InputForm from '../InputForm/InputForm';
import Spinner from '../Spinner/Spinner';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const loginHandler = () => {
    Keyboard.dismiss();
    setLoading(true);
    setError('');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetFormHandler();
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            resetFormHandler();
          })
          .catch(() => {
            setLoading(false);
            setError('Authentication Error!!');
          });
      });
  };
  const resetFormHandler = () => {
    setLoading(false);
    setEmail('');
    setPassword('');
    setError('');
  };
  console.log(loading);
  return (
    <Card>
      <CardItem>
        <InputForm
          label="Email"
          initialValue={email}
          setValue={setEmail}
          placeHolder="Enter the Email"
        />
      </CardItem>
      <CardItem>
        <InputForm
          secureTextEntry
          label="Password"
          initialValue={password}
          setValue={setPassword}
          placeHolder="Enter the Password"
        />
      </CardItem>
      {error !== '' ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      ) : null}
      <CardItem>
        {!loading ? (
          <Button title="Login" onPress={loginHandler} />
        ) : (
          <Spinner />
        )}
      </CardItem>
    </Card>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
