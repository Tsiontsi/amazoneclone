import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {img} from './images/data';
import classes from '../Carousel/Carousel.module.css';

function CarouselEffect() {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        >
            {img.map((imageItemLink, index) => (
                    <img key={imageItemLink} src={imageItemLink} alt={`Slide ${index}`} />
                ))}
        </Carousel>
        <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
