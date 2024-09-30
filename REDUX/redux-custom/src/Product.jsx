import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncgetProdcut } from './appStore/actions/ProductActions';
import { useSelector } from 'react-redux';
const Product = () => {
const dispatch = useDispatch();  
const products = useSelector((state)=>state.product.items)

useEffect(()=>{
  // dispatch(getProduct());
dispatch(  asyncgetProdcut())
},[dispatch])

  return (
    <div>
{
  products.map(product=>{
    return (
      <h1 key={product.id}>{product.id}  {product.title}</h1>
    )
  })
}
    </div>
  )
}

export default Product
