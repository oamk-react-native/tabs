import { StyleSheet} from 'react-native'
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('Use-effect in Home')
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});