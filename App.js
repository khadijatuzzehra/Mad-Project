import 'react-native-gesture-handler';
import React from 'react';
import Typography from './DesignSystem/Typography';
import {Colors} from './DesignSystem/Colors';
import LightTheme from './DesignSystem/LightTheme';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Header from './Components/header.js';
import Home from './screens/home';
import Recipe from './screens/recipe';
import Blogs from './screens/blogs';
import Favorites from './screens/favorites';
import Profile from './screens/profile';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'rgb(144,200,136)',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recipe" component={Recipe} />
        <Tab.Screen name="Blogs" component={Blogs} />
        <Tab.Screen name="Favs" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
