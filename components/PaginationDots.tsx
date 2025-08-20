import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function PaginationDots() {
  const [activeIndex, setActiveIndex] = useState(1); // 0 = first dot

  return (
    <View style={styles.dotContainer}>
      {[0, 1, 2].map((index) => (
        <View
          key={index}
          style={[
            styles.dot,
            activeIndex === index && styles.activeDot, // highlight active one
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc", // inactive
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#00BFA6", // active (green/teal like your design)
    width: 10,
    height: 10,
  },
});
