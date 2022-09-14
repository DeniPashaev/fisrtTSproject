import axios from "axios";
import React, { useState } from "react";
import { IPproduct } from "../models";

const productData: IPproduct = {
    title: '',
    price: "213",
    description: "fef",
    image: "https://i.pravatar.cc",
    category: "electronic",
    rating: {
        rate: 42,
        count: 10
    }
}

interface createProductProps {
    onCreate: (product: IPproduct) => void
}

export function CreateProduct ({onCreate}: createProductProps) {

 const [value, setValue]  = useState("")
 const [error, setError] = useState("")

   const submitHadnler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError("")

    if (value.trim().length === 0) {
        setError("error")
        return
    }

productData.title = value

  const response = await axios.post<IPproduct>('https://fakestoreapi.com/products', productData)
  onCreate(response.data)
   }

    return (
        <>
        <form onSubmit={submitHadnler}>
            <input type="text" className="border py-2 px-4 mb-2 w-full" placeholder="Enter product..." value={value} onChange={event => setValue (event.target.value)} />
            {error && <p>{error}</p>}
            <button type="submit" className="py-2 px-4 border bg-cyan-400 hover:text-white">create</button>
        </form>
        </>
    )
} 

