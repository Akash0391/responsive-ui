import Input from "@/components/Input";
import ScreensWrapper from "@/components/ScreensWrapper";
import Typo from "@/components/Typo";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Button from "@/components/Button";
import PaginationDots from "@/components/PaginationDots";
import Loading from "../../components/Loading";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/(screens)/home");
      setIsLoading(false);
    }, 2000);
    
  }

  return (
    <ScreensWrapper>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Typo
            size={24}
            fontWeight="bold"
            color="black"
            style={styles.inputTitle}
          >
            Username
          </Typo>
          <Input placeholder="Username" />
          <Typo
            size={24}
            fontWeight="bold"
            color="black"
            style={styles.inputTitle}
          >
            Email
          </Typo>
          <Input placeholder="Email" />
          <Typo
            size={24}
            fontWeight="bold"
            color="black"
            style={styles.inputTitle}
          >
            Password
          </Typo>
          <Input placeholder="Password" secureTextEntry={true} />
          <Typo
            size={24}
            fontWeight="bold"
            color="black"
            style={styles.inputTitle}
          >
            Confirm Password
          </Typo>
          <Input placeholder="Confirm Password" secureTextEntry={true} />
        </View>
        <View style={styles.checkboxContainer}>
            <TouchableOpacity style={[styles.checkbox, isChecked && styles.tickBox]} onPress={() => setIsChecked(!isChecked)}>
            </TouchableOpacity> 
            <Typo
              size={18}
              fontWeight="bold"
              color="white"
              style={styles.terms}
            >
              I agree to the Terms of Service and Privacy Policy
            </Typo>
          </View>
        <Button
          onPress={() => handleSignUp()}
          style={styles.button}
          loading={isLoading}
        >
          {isLoading ? (
            <Loading size="large" color="black" />
          ) : (
            <Typo size={35} fontWeight="bold" color="black">
              SIGN UP
            </Typo>
          )}
        </Button>
        <PaginationDots />
      </View> 
    </ScreensWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "90%",
  },
  inputTitle: {
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: "75%",
    marginTop: 100,
    height: 80,
  },
  terms: {
    alignSelf: "center",
    marginTop: 20,
  },
  checkboxContainer: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  tickBox: {
   backgroundColor: "white",
  },
});
