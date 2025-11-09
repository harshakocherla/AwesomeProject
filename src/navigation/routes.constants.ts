import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteProp } from '@react-navigation/native'

export enum AppRoutes {
    HOME = 'Home',
    DEALS = 'Deals',
    PRODUCTS = 'Products',
    PROFILE = 'Profile'
}

export type DealsRouteParam = {
  dealId: string
  dealName: string
}
export type AppRoutesParamList = {
    [AppRoutes.HOME]: undefined
    [AppRoutes.DEALS]: DealsRouteParam
    [AppRoutes.PRODUCTS]: undefined
    [AppRoutes.PROFILE]: undefined
}

export type AppNavigationProp = NativeStackNavigationProp<AppRoutesParamList>
export type AppRouteProp<RouteName extends keyof AppRoutesParamList> = RouteProp<AppRoutesParamList, RouteName>
