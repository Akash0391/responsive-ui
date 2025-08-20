import "@/app/globals.css";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
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
          <Button onPress={() => router.push("/(screens)/signUp")} style={{ marginTop: 100, width: "75%", height: 80 }}>
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
    paddingHorizontal: 20,
    paddingTop: 70,
    
  },
  logo: {
    width: 230, 
    height: 230,
    backgroundColor: "white",
    borderRadius: 200,
    marginTop: 150,
    marginBottom: 100,
  },  
  });
