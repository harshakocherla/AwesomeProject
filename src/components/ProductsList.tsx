import { FlatList } from 'react-native'
import { Item, ItemData } from './Item'

export const productData: ItemData = {
  image: 'iPhone',
  description: 'this is an iPhone',
  price: 1000,
}
export const ProductsList = () => {
  const listData: ItemData[] = new Array(10)
    .fill(productData)
    .map((each, index) => ({ ...each, image: each.image + '-' + index }))
  return <FlatList<ItemData> data={listData} renderItem={({ item }) => <Item item={item} />} />
}
