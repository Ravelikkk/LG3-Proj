import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

import MainCardProduct from './MainCardProduct';

// import './WrapperProducts.css';

export default function WrapperProducts() {

    const productList = useSelector( (state) => state.productList );
    console.log(productList);
    const { loading, error, products } = productList;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProducts());
    }, [])

    return (
    <div className="wrapper-products">
        {
            products.map(product => (
            <MainCardProduct key={product.id} product={product} showLink={false}/>
            ))
        }  
    </div>
    )
};