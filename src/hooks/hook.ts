import { useEffect, useState } from "react"
import { IPproduct } from "../models"
import axios, {AxiosError} from "axios"


export function useHooks() {
    const [products, setProducts] = useState<IPproduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    async function fetchProduct() {
      try{
        setError('')
        setLoading(true)
        const response = await axios.get<IPproduct[]>("https://fakestoreapi.com/products?limit=20")
        setProducts(response.data)
        setLoading(false)
      } catch(e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
    
    useEffect( () => {
      fetchProduct()
    }, [])

    return { products, error, loading }
}
