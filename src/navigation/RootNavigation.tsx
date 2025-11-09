import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/Home";
import { Deals } from "../screens/home/Deals";
import { AppRoutes, AppRoutesParamList } from "./routes.constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products } from "../screens/products/Products";
import { Profile } from "../screens/profile/Profile";

const Tab = createBottomTabNavigator<AppRoutesParamList>()
const Stack = createNativeStackNavigator<AppRoutesParamList>()

export const RootNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={AppRoutes.HOME} options={{ headerShown: false }} component={HomeStack} />
            <Tab.Screen name={AppRoutes.PRODUCTS} component={Products} />
            <Tab.Screen name={AppRoutes.PROFILE} component={Profile} />
        </Tab.Navigator>
    )

}
export const HomeStack = () => {
    return (
    <Stack.Navigator initialRouteName={AppRoutes.HOME}>
        <Stack.Screen name={AppRoutes.HOME} component={Home}/>
        <Stack.Screen name={AppRoutes.DEALS} component={Deals} options={({route}) => ( {
            title: route.params.dealName
        } )} />
    </Stack.Navigator>
    )
}