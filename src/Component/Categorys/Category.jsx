import React from 'react';
import { CategoryInfos } from './CategoryFullInfos';
import CategoryCard from './CategoryCard';
import classes from './category.module.css';

function Category() {
    return (
        <section className={classes.category__container}>
            {CategoryInfos.map((infos, index) => (
                <CategoryCard key={index} data={infos} />
            ))}
        </section>
    );
}

export default Category;