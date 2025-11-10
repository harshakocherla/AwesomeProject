import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './Home'
import { Deals } from './Deals'
import { HomeStackRoutes, HomeStackParamList } from '../../navigation/routes.constants'

const Stack = createNativeStackNavigator<HomeStackParamList>()

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={HomeStackRoutes.HOME}>
      <Stack.Screen name={HomeStackRoutes.HOME} component={Home} />
      <Stack.Screen
        name={HomeStackRoutes.DEALS}
        component={Deals}
        options={({ route }) => ({
          title: route.params.dealName,
        })}
      />
    </Stack.Navigator>
  )
}
