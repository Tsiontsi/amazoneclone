import React from 'react';
import Layout from '../../Component/Layout/Layout';
import Header from '../../Component/Header/Header';
import CarouselEffect from '../../Component/Carousel/Carousel';
import Category from '../../Component/Categorys/Category';
import Product from '../../Component/Product/Product';

function Landing() {
  return (
    <Layout>
        <CarouselEffect />
        <Category />
        <Product />
    </Layout>
  )
}

export default Landing