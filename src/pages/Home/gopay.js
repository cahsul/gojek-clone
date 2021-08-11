import React from 'react';
import {Image, Text, View} from 'react-native';

const Gopay = () => {
  return (
    <View style={{marginTop: 20, marginHorizontal: 17}}>
      <View
        style={{
          backgroundColor: '#2E63BC',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 14,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Image source={require('../../assets/icons/gopay.png')} />
        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
          Rp999.999.999 (wuihh banyak cay)
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#2D62BB',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 14,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/icons/pay.png')} />
          <Text style={{color: 'white'}}>Pay</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/icons/nearby.png')} />
          <Text style={{color: 'white'}}>Nearby</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/icons/topup.png')} />
          <Text style={{color: 'white'}}>Top Up</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/icons/more.png')} />
          <Text style={{color: 'white'}}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default Gopay;
