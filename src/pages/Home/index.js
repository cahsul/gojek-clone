import React, {Component} from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import Searchbar from './searchbar';
import BottomNavigation from './bottom-navigation';
import Gopay from './gopay';
import MainFeature from './main-feature';
import News from './news';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <Searchbar />
          <Gopay />
          <MainFeature />
          <News />
        </ScrollView>
        <BottomNavigation />
      </View>
    );
  }
}

export default Home;
