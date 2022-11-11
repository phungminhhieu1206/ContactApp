/* eslint-disable react/self-closing-comp */
import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';

const AuthStack = createStackNavigator();

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
};

const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <Text>Register Screen</Text>
    </SafeAreaView>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
