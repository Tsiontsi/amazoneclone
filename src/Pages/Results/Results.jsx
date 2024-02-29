// import React from 'react';
import { useState, useEffect } from 'react';
import classes from '../Results/Results.module.css';
import Layout from '../../Component/Layout/Layout.jsx';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Component/Product/ProductCard.jsx';
import Loader from '../../Component/Loader/Loader.jsx';


function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {categoryName} =useParams();
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
    setResults(res.data);
    setIsLoading(false);
  })
  .catch((err) => {
    console.log(err);
    setIsLoading(false);
  });
  }, [categoryName]);
  

  return (
    <Layout>
        <div>
          <h1 style={{padding: "30px"}}>Results</h1>
          <p style={{padding: "30px"}}>category / {categoryName}</p>
          <hr />
         {isLoading ? (
          <Loader />
          ) : (
            <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
              product={product}
              renderDesc={false}
              renderAdd={true}
                />
            ))}
          </div>
          )}
      </div>
    </Layout>
  );
};


export default Results;