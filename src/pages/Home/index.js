import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/*serach bar */}
          <View
            style={{marginTop: 17, marginHorizontal: 17, flexDirection: 'row'}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                style={{
                  color: 'black',
                  borderWidth: 1,
                  borderRadius: 50,
                  paddingLeft: 40,
                  paddingRight: 20,
                  borderColor: 'grey',
                  fontSize: 14,
                  height: 40,
                  marginRight: 17,
                }}
                placeholderTextColor="grey"
                placeholder="mau makan apa Cah ?"
              />
              <Image
                style={{position: 'absolute', top: 8, left: 8}}
                source={require('../../assets/icons/search.png')}
              />
            </View>
            <View
              style={{
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/icons/promo.png')}
                style={{width: 40, height: 40}}
              />
            </View>
          </View>
        </View>
        {/*bottom navigation*/}
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
