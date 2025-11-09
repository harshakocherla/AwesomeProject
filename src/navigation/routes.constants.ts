import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteProp } from '@react-navigation/native'

export enum AppRoutes {
    HOME = 'Home',
    DEALS = 'Deals'
}

export type AppRoutesParamList = {
    [AppRoutes.HOME]: undefined
    [AppRoutes.DEALS]: undefined
}

export type AppNavigationProp = NativeStackNavigationProp<AppRoutesParamList>
export type AppRouteProp<RouteName extends keyof AppRoutesParamList> = RouteProp<
  AppRoutesParamList,
  RouteName
>
