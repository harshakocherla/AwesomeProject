import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProductsStackParamList, ProductsStackRoutes } from '../../navigation/routes.constants'
import { Products } from './Products'
import { ProductDisplayPage } from './ProductDisplayPage'

const Stack = createNativeStackNavigator<ProductsStackParamList>()
export const ProductsStack = () => {
  return (
    <Stack.Navigator initialRouteName={ProductsStackRoutes.PRODUCTS}>
      <Stack.Screen name={ProductsStackRoutes.PRODUCTS} component={Products} />
      <Stack.Screen name={ProductsStackRoutes.PRODUCT_DISPLAY} component={ProductDisplayPage} />
    </Stack.Navigator>
  )
}
