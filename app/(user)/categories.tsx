import { StyleSheet, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import ScreensWrapper from "@/components/ScreensWrapper";
import Typo from "@/components/Typo";
import List from "@/components/List";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const Categories = () => {
  const menuItems = [
    {
        title: "Plastic",
        image: require("@/assets/images/bottle.png"),
    },
    {
        title: "Organic",
        image: require("@/assets/images/organic.png"),
    },
    
    {
        title: "Paper",
        image: require("@/assets/images/paper.png"),
    },
    
    {
        title: "Glass",
        image: require("@/assets/images/flask.png"),
    },
    {
        title: "Fire",
        image: require("@/assets/images/fire.png"),
    },
  ];

  return (
    <ScreensWrapper>
      <View style={styles.container}>
        <Typo
          style={{ marginBottom: height * 0.035, fontSize: height * 0.04 }}
          fontWeight="bold"
          color="lightblue"
        >
          Categories
        </Typo>
        <View style={styles.listContainer}>   
            {menuItems.map((item, index) => (
                <List key={index} onPress={() => router.push("/priceList")} style={styles.listItem} >          
                    <Image source={item.image} style={{ width: width * 0.17, height: height * 0.077 }} />
                    <Typo size={height * 0.03} fontWeight="bold" color="black" style={styles.listText}>{item.title}</Typo>
                </List>
            ))  }
        </View>
      </View>
    </ScreensWrapper>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.05,
    alignItems: "center",
  },
  listContainer: {
    marginTop: height * 0.02,
    flexDirection: "column",
    justifyContent: "space-between",
    
    width: "100%", 
    gap: height * 0.03,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: height * 0.02,
  },
  listText: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -width * 0.03 }],
    textAlign: "center",
  },
});
