import { Dimensions, StyleSheet, View } from 'react-native'       
import React, { useState } from 'react'
import ScreensWrapper from '@/components/ScreensWrapper'
import Avatar from '@/components/Avatar'
import Typo from '@/components/Typo'
import List from '@/components/List'
   

const { width, height } = Dimensions.get("window");

const Profile = () => {

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);    
    const menuItems = ["Sorting", "Processing", "Weather", "News", "Settings", "Tools"];

  return (
    <ScreensWrapper>
      <View style={styles.container}>
        <Avatar uri={require("@/assets/images/defaultAvatar.png")} size={height * 0.10} />   
        <View style={styles.nameContainer}>
          <Typo
            size={height * 0.038}
            fontWeight="bold"
            color="lightblue"
            style={{marginBottom: height * 0.015}}
          >
            Your Name
          </Typo>
        </View>
        <View style={styles.listContainer}>   
            {menuItems.map((item, index) => (
                <List key={index} onPress={() => {setFocusedIndex(focusedIndex === index ? null : index)}} isFocused={focusedIndex === index} >       
                    <Typo size={height * 0.03} fontWeight="bold" color="black">{item}</Typo>
                </List>
            ))  }
        </View>
      </View>
    </ScreensWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },
  nameContainer: {
    marginTop: height * 0.01,
  },
  listContainer: {
    marginTop: height * 0.02,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%", 
    gap: height * 0.01,
  },
})