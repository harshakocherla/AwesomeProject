import { ItemData } from '../components/Item'

type ProductsApiResponse = {
  data: ItemData[]
  nextPageToken: string | null
}
export const MOCK_API = {
  fetchProducts: (pageToken: string | null = null): Promise<ProductsApiResponse> => {
    return new Promise(resolve => {
      // Simulate network latency
      setTimeout(() => {
        const pageSize = 20 // Fixed page size for this mock
        const products: ItemData[] = []
        for (let i = 0; i < 200; i++) {
          // Total 200 mock logs
          products.push({
            id: `item-${i + 1}`,
            image: 'iPhone',
            description: 'this is an iPhone',
            price: 1000,
          })
        }

        const startIndex = pageToken ? parseInt(pageToken, 10) : 0
        const endIndex = startIndex + pageSize
        const pageData = products.slice(startIndex, endIndex)

        const response: ProductsApiResponse = {
          data: pageData,
          nextPageToken: endIndex < products.length ? String(endIndex) : null,
        }
        resolve(response)
      }, 700) // Simulate some loading time
    })
  },
}
