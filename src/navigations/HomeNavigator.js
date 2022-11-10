/* eslint-disable react/self-closing-comp */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const HomeStack = createStackNavigator();

const ContactList = () => {
  return (
    <View>
      <Text>List Contacts</Text>
    </View>
  );
};

const ContactDetail = () => {
  return (
    <View>
      <Text>Contact Detail</Text>
    </View>
  );
};

const CreateContact = () => {
  return (
    <View>
      <Text>Create Contact</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Contacts"
        component={ContactList}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Detail"
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Create Contact"
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
