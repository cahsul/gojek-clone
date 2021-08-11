import React from 'react';
import {Image, Text, View} from 'react-native';

const MainFeature = () => {
  return (
    <View
      style={{
        marginTop: 20,
        marginHorizontal: 17,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-ride.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          GO-RIDE
        </Text>
      </View>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-car.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          GO-CAR
        </Text>
      </View>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-bluebird.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          GO-BLUEBIRD
        </Text>
      </View>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-send.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          GO-SEND
        </Text>
      </View>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-deals.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          GO-DEALS
        </Text>
      </View>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-pulsa.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          GO-PULSA
        </Text>
      </View>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-food.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          GO-FOOD
        </Text>
      </View>
      <View
        style={{
          width: 90,
          height: 90,
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D9E1E3',
            width: 58,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/icons/go-more.png')} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 6}}>
          MORE
        </Text>
      </View>
    </View>
  );
};

export default MainFeature;
