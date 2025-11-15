import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  ProductsStackCompositeNavigationProp,
  ProductsStackRoutes,
} from '../navigation/routes.constants'

export type ItemData = {
  id: string
  image: string
  description: string
  price: number
}

export type ItemProps = {
  item: ItemData
}

const ItemComponent = ({ item }: ItemProps) => {
  const { id, image, description, price } = item
  const navigation = useNavigation<ProductsStackCompositeNavigationProp>()
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(ProductsStackRoutes.PRODUCT_DISPLAY, {
          id,
          image,
          description,
          price,
          reviews: '5 star review',
        })
      }
      style={styles.container}
    >
      <Text>{image}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
})

export const Item = React.memo(ItemComponent)
