import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusinessList from '../../components/Home/PopularBusinessList'

export default class home extends Component {
  render() {
    return (
      <ScrollView>
        {/* Header */}
        <Header></Header>

        {/* Slider */}
        <Slider></Slider>
        {/* Categories */}
        <Category></Category>
        {/* Popular Business List */}
        <PopularBusinessList></PopularBusinessList>
      </ScrollView>

    )
  }
}
