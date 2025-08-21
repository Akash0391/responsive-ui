import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreensWrapper from '@/components/ScreensWrapper'

const Home = () => {    
  return (
    <ScreensWrapper>
      <View style={styles.container}>
        <Text>home</Text>
      </View>
    </ScreensWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})