import React, { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css';
import Layout from '../../Component/Layout/Layout.jsx';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { productUrl } from '../../Api/endPoints.js';
import ProductCard from '../../Component/Product/ProductCard.jsx';
import Loader from "../../Component/Loader/Loader.jsx";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    })
  }, [productId]);

  return (
    <Layout>
        {isLoading? (<Loader/>) : (<ProductCard 
            product={product} 
            flex={true} 
            renderDesc={true}
            renderAdd={true}
          />)}
    </Layout>
  );
}

export default ProductDetail;