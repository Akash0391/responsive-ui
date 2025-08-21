import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'    

const { width, height } = Dimensions.get("window");

const Avatar = ({ uri, size = height * 0.06, style }: any) => { 

  return (
    <View style={[styles.avatar, {height: size, width: size, borderRadius: size / 2}, style]}>  
      <Image 
      source={uri}  
      style={{flex: 1}} 
      contentFit='cover'
      transition={100}
      />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatar: {
        alignSelf: 'center',
        backgroundColor: "white", 
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 2,
        height: height * 0.06,
        width: height * 0.06,
        borderWidth: 1,
        borderColor: "white",
        overflow: 'hidden',
    }
})