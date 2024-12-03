import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fetcher';

const ProductDetail = () => {
  const [product, setProduct] = useState({errorMessage: '', data: []});
  const {productId} = useParams();

  useEffect(()=> {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    }
    fetchData();
  }, [productId])


  return (
    <div>ProductDetail title: {product.data.title}</div>
  )
}

export default ProductDetail