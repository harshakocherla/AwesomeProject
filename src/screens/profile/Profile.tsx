import { Button, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../context/ThemeContext'

export const Profile = () => {
  const { colors, toggleTheme } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Button title='change theme' onPress={toggleTheme} />
      <Text style={{ color: colors.text }}>This is Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
})
