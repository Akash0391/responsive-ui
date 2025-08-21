import "@/app/globals.css";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");
  
export default function Welcome() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Typo size={40} fontWeight="bold" color="white">
          HELP THE NATURE
        </Typo>
        <Typo size={40} fontWeight="bold" color="white">
          BEGIN WITH YOURSELF
        </Typo>
        
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            resizeMode="cover"
          />
          <Button onPress={() => router.push("/(screens)/signUp")} style={{ marginTop: height * 0.1, width: width * 0.75, height: height * 0.08 }}>
            <Typo size={35} fontWeight="bold" color="black">  
                GET STARTED
            </Typo>
          </Button>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: width * 0.02,
    paddingTop: height * 0.07,
    
  },
  logo: {
    width: width * 0.55,  
    height: height * 0.25,
    backgroundColor: "white",
    borderRadius: 200,  
    marginTop: height * 0.15,
    marginBottom: height * 0.1,
  },  
  });
