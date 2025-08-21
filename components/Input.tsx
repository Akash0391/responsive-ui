import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Input = (props: any) => {
    const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={[
        props.containerStyle && props.containerStyle,
        styles.container,
        isFocused && styles.primaryBorder
    ]}>
      {props.icon && props.icon}
      <TextInput
        style={[styles.inputStyle, props.inputStyle]}
        placeholderTextColor="gray"
        ref={props.inputRef && props.inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}  
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "lightblue",
        borderRadius: 100,
        borderCurve: 'continuous',
        paddingHorizontal: 15,
        gap: 10,
    },
    primaryBorder: {
        borderColor: "lightblue",
        borderWidth: 4,
    },
    inputStyle: {
        flex: 1,
        color: "black", 
        fontSize: 16,
    },
})