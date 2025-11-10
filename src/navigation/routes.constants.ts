import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { CompositeNavigationProp } from "@react-navigation/native"
import { RouteProp } from '@react-navigation/native'

// Route names for the Home Stack (nested inside Home tab)
export enum HomeStackRoutes {
    HOME = 'Home',
    DEALS = 'Deals'
}

// Route names for the Tab Navigator (top level)
export enum TabRoutes {
    HOME = 'Home',
    PRODUCTS = 'Products',
    PROFILE = 'Profile'
}

// Parameters for Deals screen
export type DealsRouteParam = {
  dealId: string
  dealName: string
}

// Param list for the Home Stack Navigator (nested inside Home tab)
export type HomeStackParamList = {
    [HomeStackRoutes.HOME]: undefined
    [HomeStackRoutes.DEALS]: DealsRouteParam
}

// Param list for the Tab Navigator (top level)
export type TabParamList = {
    [TabRoutes.HOME]: undefined  // Home tab contains the HomeStack
    [TabRoutes.PRODUCTS]: undefined
    [TabRoutes.PROFILE]: undefined
}

// Navigation prop types for Home Stack screens
// This allows navigation within the Home stack (Home <-> Deals)
export type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>

// Navigation prop type for Tab Navigator
// This allows navigation between tabs (Home <-> Products <-> Profile)
export type TabNavigationProp = BottomTabNavigationProp<TabParamList>

// Composite navigation prop for screens in the Home Stack
// This allows both stack navigation (within Home stack) and tab navigation (between tabs)
export type HomeStackCompositeNavigationProp = CompositeNavigationProp<
    HomeStackNavigationProp,
    TabNavigationProp
>

// Route prop type for Home Stack screens
export type HomeStackRouteProp<RouteName extends keyof HomeStackParamList> = RouteProp<HomeStackParamList, RouteName>

// Route prop type for Tab screens
export type TabRouteProp<RouteName extends keyof TabParamList> = RouteProp<TabParamList, RouteName>
