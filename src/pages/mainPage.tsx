/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/createProduct";
import Product from "../components/Product";
import { Loader } from "../components/load";
import { Errorer } from "../components/error";
import { useState } from "react";
import { useHooks } from "../hooks/hook";

export function MainPage() {
    const { products, error, loading } = useHooks();
    const [modal, setModal] = useState (true)
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <Errorer error={error} />}
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        { modal && <Modal title="Create new product">
          <CreateProduct onCreate={() => setModal(false)}/>
        </Modal>}
      </div>
        
    )
}