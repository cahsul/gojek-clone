import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import Searchbar from './searchbar';
import BottomNavigation from './bottom-navigation';
import Gopay from './gopay';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Searchbar />
          <Gopay />
        </View>
        <BottomNavigation />
      </View>
    );
  }
}

export default Home;
