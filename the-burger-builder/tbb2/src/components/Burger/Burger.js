import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
    // new constant 
    // object - default js -> keys method -> array of keys -> "cheese" "meat"..
    // keys->array->properties->map->(gives keys to strings)->string->array->no of elements(1,2)elements
    // Array-object->create array->amount of given ingredient
    // _ blank element, 
    let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type={igKey}/>

        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if (transformedIngredients.length===0){
        transformedIngredients = <p>Please start adding Ingredients!</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
             {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;