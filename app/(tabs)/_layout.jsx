import { Tabs } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../constants/Colors'
import Feather from '@expo/vector-icons/Feather';

export default class TabLayout extends Component {
  render() {
    return (
      <Tabs screenOptions={{headerShown : false,tabBarActiveTintColor : Colors.PRIMARY}}>
        <Tabs.Screen name='home' options={{
            tabBarLabel : 'Home',
            tabBarIcon : ({color})=> <Feather name="home" size={24} color={color} />
        }}/>
        <Tabs.Screen name='explore' options={{
            tabBarLabel : 'Explore',
            tabBarIcon : ({color})=> <Feather name="search" size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile' options={{
            tabBarLabel : 'Profile',
            tabBarIcon : ({color})=> <Ionicons name="people-circle-outline" size={24} color={color} />
        }}/>
      </Tabs>
    )
  }
}
