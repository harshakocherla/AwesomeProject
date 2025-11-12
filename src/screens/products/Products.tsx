import { StyleSheet, View } from 'react-native'
import { ProductsList } from '../../components/ProductsList'

export const Products = () => {
  return (
    <View style={styles.container}>
      <ProductsList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
})
