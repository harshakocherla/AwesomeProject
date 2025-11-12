import { TabRoutes, TabParamList } from './routes.constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Profile } from '../screens/profile/Profile'
import { HomeStack } from '../screens/home/HomeStack'
import { ProductsStack } from '../screens/products/ProductsStack'

const Tab = createBottomTabNavigator<TabParamList>()

export const RootNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabRoutes.HOME} options={{ headerShown: false }} component={HomeStack} />
      <Tab.Screen
        name={TabRoutes.PRODUCTS}
        options={{ headerShown: false }}
        component={ProductsStack}
      />
      <Tab.Screen name={TabRoutes.PROFILE} component={Profile} />
    </Tab.Navigator>
  )
}
