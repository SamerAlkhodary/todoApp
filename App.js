import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, View } from 'react-native';

import Item from './model/Item.js';
import Navigator from './navigation/HomeNavigation';
import HomePage from './pages/HomePage.js';
export default function App() {

  const data = [new Item("Work","go to work today")
  ,new Item('School','get there asap today'),
  new Item('Laundry','get there asap today'),
  new Item('Gym','get there asap today'),
  new Item('Youtube','get there asap today'),
  new Item('Friends','get there asap today'),
  new Item('School','get there asap today'),
  new Item('School','get there asap today')];

  return (
    <Navigator></Navigator>
  
   
  );
}

