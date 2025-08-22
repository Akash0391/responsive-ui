import { Dimensions, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const List = ({
  children,
  onPress,          
  isFocused,
  style,
}: {    
  children: React.ReactNode;            
  onPress: () => void;      
  isFocused?: boolean;               
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{  
        backgroundColor: isFocused ? "#C6F7F5" : "white",   
        borderWidth: 2, 
        borderRadius: height * 0.01, 
        borderColor: "lightblue",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}    
    >
      <View style={[styles.container, style]}>{children}</View>  
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    height: height * 0.068,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height * 0.01,
  },
});
