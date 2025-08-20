
import { View, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native'   
import React from 'react'

  
const { height } = Dimensions.get("window");
const ScreenWrapper = ({
        children,
}: {
    children: React.ReactNode,
}) => {   

    let paddingTop = Platform.OS === "ios" ? height * 0.06 : 40;
    let paddingBottom = 0;

  return (
    <ImageBackground 
        style={{
        flex: 1,   
    }}
    source={require("../assets/images/bg-image.png")}
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

export default ScreenWrapper