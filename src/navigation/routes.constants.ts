import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { ItemData } from '../components/Item'

// Route names for the Home Stack (nested inside Home tab)
export enum HomeStackRoutes {
  HOME = 'Home',
  DEALS = 'Deals',
}

// Route names for the Product Stack (nested inside Home tab)
export enum ProductsStackRoutes {
  PRODUCTS = 'Products',
  PRODUCT_DISPLAY = 'ProductsDisplay',
}

// Route names for the Tab Navigator (top level)
export enum TabRoutes {
  HOME = 'Home',
  PRODUCTS = 'Products',
  PROFILE = 'Profile',
}

// Parameters for Deals screen
export type DealsRouteParam = {
  dealId: string
  dealName: string
}

// Parameters for Deals screen
export type ProductsRouteParam = ItemData & {
  reviews: string
}

// Param list for the Home Stack Navigator (nested inside Home tab)
export type HomeStackParamList = {
  [HomeStackRoutes.HOME]: undefined
  [HomeStackRoutes.DEALS]: DealsRouteParam
}

// Param list for the Products Stack Navigator (nested inside Home tab)
export type ProductsStackParamList = {
  [ProductsStackRoutes.PRODUCTS]: undefined
  [ProductsStackRoutes.PRODUCT_DISPLAY]: ProductsRouteParam
}

// Param list for the Tab Navigator (top level)
export type TabParamList = {
  [TabRoutes.HOME]: undefined // Home tab contains the HomeStack
  [TabRoutes.PRODUCTS]: undefined
  [TabRoutes.PROFILE]: undefined
}

// Navigation prop types for Home Stack screens
// This allows navigation within the Home stack (Home <-> Deals)
export type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>

// Navigation prop types for Products Stack screens
// This allows navigation within the Products stack (Products <-> Product Display)
export type ProductsStackNavigationProp = NativeStackNavigationProp<ProductsStackParamList>

// Navigation prop type for Tab Navigator
// This allows navigation between tabs (Home <-> Products <-> Profile)
export type TabNavigationProp = BottomTabNavigationProp<TabParamList>

// Composite navigation prop for screens in the Home Stack
// This allows both stack navigation (within Home stack) and tab navigation (between tabs)
export type HomeStackCompositeNavigationProp = CompositeNavigationProp<
  HomeStackNavigationProp,
  TabNavigationProp
>

// Composite navigation prop for screens in the Products Stack
// This allows both stack navigation (within Products stack) and tab navigation (between tabs)
export type ProductsStackCompositeNavigationProp = CompositeNavigationProp<
  ProductsStackNavigationProp,
  TabNavigationProp
>

// Route prop type for Home Stack screens
export type HomeStackRouteProp<RouteName extends keyof HomeStackParamList> = RouteProp<
  HomeStackParamList,
  RouteName
>

// Route prop type for Product Stack screens
export type ProductsStackRouteProp<RouteName extends keyof ProductsStackParamList> = RouteProp<
  ProductsStackParamList,
  RouteName
>

// Route prop type for Tab screens
export type TabRouteProp<RouteName extends keyof TabParamList> = RouteProp<TabParamList, RouteName>
