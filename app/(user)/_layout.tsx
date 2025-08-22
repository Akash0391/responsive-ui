import { Image, StyleSheet, View } from "react-native"; 
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";

interface TabBarIconProps {
  focused: boolean;
  icon: any;
}

const TabBarIcon = ({ focused, icon }: TabBarIconProps) => (
  <View style={{
    alignItems: "center",
    width: 30,
    height: 30,
  }}>
    <Image
      source={icon}
      style={{
        width: 30,
        height: 30,
        marginTop: 10,
      }}
      resizeMode="contain"
      tintColor={focused ? "lightblue" : "#d9d9d9"}
    />
  </View>
);
const UserLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          elevation: 0,
          borderTopWidth: 1,
          height: 90,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="categories"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.categories} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.user} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.dots} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="priceList"
        options={{
          href: null, // <-- hides from tab bar
        }}
      />
    </Tabs>
  );
};

export default UserLayout;

const styles = StyleSheet.create({});
