import { StyleSheet, View, Dimensions, Image } from "react-native";
import React from "react";
import ScreensWrapper from "@/components/ScreensWrapper";
import Typo from "@/components/Typo";

const { width, height } = Dimensions.get("window");

const Home = () => {
  return (
    <ScreensWrapper>
      <View style={styles.container}>
        <Typo
          style={{ marginBottom: height * 0.035, fontSize: height * 0.04 }}
          fontWeight="bold"
          color="lightblue"
        >
          Weather
        </Typo>

        <View style={styles.weatherContainer}>
          <Typo size={height * 0.03} fontWeight="bold" color="black">
            Today
          </Typo>

          {/* Morning */}
          <View style={styles.weatherInfo}>
            <Typo size={height * 0.025} fontWeight="400" color="black">
              Morning:{""}
            </Typo>
            <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
              9°
            </Typo>
            <Image
              source={require("@/assets/images/morning.png")}
              style={{ width: height * 0.04, height: height * 0.04 }}
            />
          </View>

          {/* Daytime */}
          <View style={styles.weatherInfo}>
            <Typo size={height * 0.025} fontWeight="400" color="black">
              Daytime:{"  "}
            </Typo>
            <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
              14°
            </Typo>
            <Image
              source={require("@/assets/images/daytime.png")}
              style={{ width: height * 0.04, height: height * 0.04 }}
            />
          </View>

          {/* Evening */}
          <View style={styles.weatherInfo}>
            <Typo size={height * 0.025} fontWeight="400" color="black">
              Evening:{"   "}
            </Typo>
            <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
              13°
            </Typo>
            <Image
              source={require("@/assets/images/evening.png")}
              style={{ width: height * 0.04, height: height * 0.04 }}
            />
          </View>

          {/* Night */}
          <View style={styles.weatherInfo}>
            <Typo size={height * 0.025} fontWeight="400" color="black">
              Night:{"      "}
            </Typo>
            <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
              7°
            </Typo>
            <Image
              source={require("@/assets/images/night.png")}
              style={{ width: height * 0.04, height: height * 0.04 }}
            />
          </View>
        </View>

        <View style={styles.todayWeatherContainer}>
          <Typo size={height * 0.025} fontWeight="500" color="black">
            Today{"                   "}
          </Typo>
          <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
            10° – 16°
          </Typo>
          <Image
            source={require("@/assets/images/today.png")}
            style={{ width: height * 0.04, height: height * 0.04 }}
          />
        </View>
        <View style={{ flexDirection: "column", gap: height * 0.01 }}>
          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Typo size={height * 0.025} fontWeight="500" color="black">
                11th September
              </Typo>
              <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
                10° – 16°
              </Typo>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Typo size={height * 0.025} fontWeight="500" color="black">
                12th September
              </Typo>
              <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
                10° – 16°
              </Typo>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Typo size={height * 0.025} fontWeight="500" color="black">
                13th September
              </Typo>
              <Typo size={height * 0.025} fontWeight="bold" color="lightblue">
                10° – 16°
              </Typo>
            </View>
          </View>
        </View>
      </View>
    </ScreensWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.05,
    alignItems: "center",
  },
  weatherContainer: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    borderRadius: height * 0.01,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  weatherInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: height * 0.005,
  },
  todayWeatherContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05,
  },
  listContainer: {
    width: "100%",
    marginBottom: height * 0.01,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    borderRadius: height * 0.01,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: height * 0.005,
  },
});
