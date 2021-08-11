import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'green'}} />
        <View
          style={{
            height: 54,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26}}>
              <Image
                style={{width: 26, height: 26}}
                source={require('../../assets/icons/home-active.png')}
              />
            </View>
            <Text style={{fontSize: 11, color: '#43AB4A'}}>Home</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26}}>
              <Image
                style={{width: 26, height: 26}}
                source={require('../../assets/icons/order.png')}
              />
            </View>
            <Text style={{fontSize: 11, color: '#545454'}}>Order</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26}}>
              <Image
                style={{width: 26, height: 26}}
                source={require('../../assets/icons/help.png')}
              />
            </View>
            <Text style={{fontSize: 11, color: '#545454'}}>Help</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26}}>
              <Image
                style={{width: 26, height: 26}}
                source={require('../../assets/icons/inbox.png')}
              />
            </View>
            <Text style={{fontSize: 11, color: '#545454'}}>Inbox</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: 26, height: 26}}>
              <Image
                style={{width: 26, height: 26}}
                source={require('../../assets/icons/account.png')}
              />
            </View>
            <Text style={{fontSize: 11, color: '#545454'}}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
