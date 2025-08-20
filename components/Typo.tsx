import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import React from 'react'

const Typo = ({
    size=16,
    color="white",
    fontWeight="400",
    children,
    style,
    textProps = {},
}: {
    size?: number,
    color?: string,
    fontWeight?: string,
    children: React.ReactNode,
    style?: StyleProp<TextStyle>,
    textProps?: TextProps,
}) => {

    const textStyle: TextStyle = {
        fontSize: size,
        color,
        fontWeight: fontWeight as TextStyle["fontWeight"],
    }
  return (
    <Text style={[textStyle, style]} {...textProps}>
        {children}
    </Text>
  )
}

export default Typo