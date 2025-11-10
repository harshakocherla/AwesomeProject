import { TabRoutes, TabParamList } from "./routes.constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products } from "../screens/products/Products";
import { Profile } from "../screens/profile/Profile";
import { HomeStack } from "../screens/home/HomeStack";

const Tab = createBottomTabNavigator<TabParamList>()

export const RootNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={TabRoutes.HOME} options={{ headerShown: false }} component={HomeStack} />
            <Tab.Screen name={TabRoutes.PRODUCTS} component={Products} />
            <Tab.Screen name={TabRoutes.PROFILE} component={Profile} />
        </Tab.Navigator>
    )
}