import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/Home";
import { Deals } from "../screens/home/Deals";
import { AppRoutes, AppRoutesParamList } from "./routes.constants";

const Stack = createNativeStackNavigator<AppRoutesParamList>()

export const RootNavigation = () => {
    return (
    <Stack.Navigator initialRouteName={AppRoutes.HOME}>
        <Stack.Screen name={AppRoutes.HOME} component={Home}/>
        <Stack.Screen name={AppRoutes.DEALS} component={Deals} />
    </Stack.Navigator>
    )
}