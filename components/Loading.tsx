import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, View } from 'react-native'
import React from 'react'

const Loading = ({  
    size = "large",
}: ActivityIndicatorProps) => {
  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={size} color={"white"} />
    </View>
  )
}

export default Loading      

const styles = StyleSheet.create({})