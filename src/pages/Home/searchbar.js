import React from 'react';
import {Image, TextInput, View} from 'react-native';

const Searchbar = () => {
  return (
    <View style={{marginTop: 17, marginHorizontal: 17, flexDirection: 'row'}}>
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
  );
};

export default Searchbar;
