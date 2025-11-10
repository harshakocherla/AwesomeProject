import { StyleSheet, Text, View } from 'react-native'

export const Item = () => {
  return (
    <View style={styles.container}>
      <Text>This is Item Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
})
