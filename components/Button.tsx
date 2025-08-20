import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'    
import Typo from './Typo'

const Button = ({
    onPress,
    children,
    style,  
    loading,
}: {
    onPress: () => void,
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>,
    loading?: boolean,
}) => {    
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Typo size={16} fontWeight="700" color="black">{children}</Typo>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 56,
    borderRadius: 100,
    borderCurve: "continuous",
    alignItems: "center",
    justifyContent: "center",
  },
});