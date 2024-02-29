import React from 'react';
import classes from './category.module.css';
import {Link} from 'react-router-dom';

function CategoryCard({data}) {
  return (
    <div className={classes.category}>
        <Link to={`/category/${data.category}`} >
            <span>
                <h3>{data?.title}</h3>
            </span>
            <img src={data?.imageLink} alt="" />
            <p>Shop Now</p>
        </Link>
    </div>
  );
}

export default CategoryCard