export interface IPproduct {
    id?: number
    title: string
    price: string
    description: string
    category: string
    image: string
    rating: {
       rate: number
       count: number
    }
}