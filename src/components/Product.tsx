import React, { useState } from 'react';
import { IPproduct } from '../models';

interface ProductProps {
  product: IPproduct
}

function Product(props: ProductProps) {

  const [details, setDetails] = useState(false)

  const btnClassName = details ? 'bg-blue-400' : 'bg-cyan-400'
  const btnClasses = ['py-2 px-4 border', btnClassName]

  return (
    <>
    <div className='block'>_</div>
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <img src={props.product.image} className="w-1/6" alt="phot"/>
      <p>{ props.product.title }</p>
      <p>{ props.product.price }</p>
      <button className={btnClasses.join(' ')} onClick={() => setDetails( prev => !prev)}>
        {details ? "Hide Details" : "Show Details" }
      </button>
      {details && <div> <p>{ props.product.description }</p>
      <p>
        <span style={{ fontWeight : "bold" }}>{ props.product.rating.rate}</span>
        </p>
      </div>}
    </div>
    </>
  );
}

export default Product;