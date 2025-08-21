
import { View, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native'   
import React from 'react'

  
const { height } = Dimensions.get("window");
const ScreensWrapper = ({
        children,
}: {
    children: React.ReactNode,
}) => {   

    let paddingTop = Platform.OS === "ios" ? height * 0.06 : height * 0.02;   
    let paddingBottom = 0;

  return (
    <ImageBackground 
        style={{
        flex: 1,   
    }}
    source={require("@/assets/images/bgimage.png")}
    >
      <View style={{
        flex: 1,
        paddingTop,
        paddingBottom,
      }}>
        <StatusBar
          translucent={false}
          barStyle={'light-content'}
        />
        {children}
      </View>
    </ImageBackground>
  ) 
}

export default ScreensWrapper