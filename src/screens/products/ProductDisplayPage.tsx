import { Text, View } from 'react-native'
import { ProductsStackRouteProp, ProductsStackRoutes } from '../../navigation/routes.constants'

type PDPProps = {
  route: ProductsStackRouteProp<ProductsStackRoutes.PRODUCT_DISPLAY>
}
export const ProductDisplayPage = ({ route }: PDPProps) => {
  const { image, description, price, reviews } = route.params
  return (
    <View>
      <Text>{image}</Text>
      <View>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
      <Text>{reviews}</Text>
    </View>
  )
}
