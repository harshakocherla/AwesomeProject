import { FlatList, Text } from 'react-native'
import { Item, ItemData } from './Item'
import { useCallback, useEffect, useState } from 'react'
import { MOCK_API } from '../__mock__/mock-api'

const LoadingIndicator = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null
  return <Text>Loading...</Text>
}
export const ProductsList = () => {
  const [page, setPage] = useState<string | null>(null)
  const [data, setData] = useState<ItemData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)
  useEffect(() => {
    const loadData = async () => {
      // Load initial data with null page token
      setIsLoading(true)
      const { data: productData, nextPageToken } = await MOCK_API.fetchProducts(null)
      setData(productData)
      setPage(nextPageToken)
      setHasMore(!!nextPageToken)
      setIsLoading(false)
    }
    loadData()
  }, []) // Only run on mount

  const loadMore = useCallback(async () => {
    // Don't fetch if already loading, no more data, or no page token
    if (isLoading || !hasMore || !page) {
      return
    }
    setIsLoading(true)
    try {
      const { data: productData, nextPageToken } = await MOCK_API.fetchProducts(page)
      // Append new data to existing data
      setData(prevData => [...prevData, ...productData])
      setPage(nextPageToken)
      setHasMore(!!nextPageToken)
    } catch (error) {
      console.error('Error loading more products:', error)
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, hasMore, page])

  return (
    <FlatList<ItemData>
      keyExtractor={item => item.id}
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      ListFooterComponent={<LoadingIndicator isLoading={isLoading} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  )
}
