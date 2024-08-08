import React, { Component } from 'react'
import { Text, View } from 'react-native'
import UserIntro from '../../components/Profile/UserIntro'
import MenuList from '../../components/Profile/MenuList'

export default class profile extends Component {
  render() {
    return (
      <View style={{padding:20}}>
        <Text style={{fontFamily:'outfit-bold',fontSize :25}}> Profile </Text>
        {/* User Intro */}
        <UserIntro></UserIntro>
        {/* Menu List */}
        <MenuList></MenuList>
      </View>
    )
  }
}
