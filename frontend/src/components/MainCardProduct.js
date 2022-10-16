import React from 'react';

import { Link } from 'react-router-dom';

import { FaCartArrowDown } from 'react-icons/fa';

import MainRating from './MainRating';

import './MainCardProduct.css';


export default function MainCardProduct(props) {

    const { product, showLink = false } = props;

    function handleIconCardProductClick (idOfProductSelected) {
        
        // aciona o modal
        const objDivCardProduct = document.querySelector(`.cardId-${idOfProductSelected}`);
        const objDivBlurContainer = document.querySelector(`.containerBlur-ByProductId-${idOfProductSelected}`);

        objDivCardProduct.classList.toggle("isActive");
        objDivBlurContainer.classList.toggle("isActive");


        const objIcon =  document.querySelector(`.iconId-${idOfProductSelected}`); 

        // pega o produto que foi adicionado no cart


        // finalmente adiciona no cart
        // props.history.push(`/cart/${product.id}`);
    }

    function handleCancelModalSingleProductClick(idOfProductSelected) {
        const objDivCardProduct = document.querySelector(`.cardId-${idOfProductSelected}`);
        const objDivBlurContainer = document.querySelector(`.containerBlur-ByProductId-${idOfProductSelected}`);

        objDivCardProduct.classList.toggle("isActive");
        objDivBlurContainer.classList.toggle("isActive");
    }

    function handleConfirmModalSingleProductClick(idOfProductSelected) {
        // desativa modal
        const objDivCardProduct = document.querySelector(`.cardId-${idOfProductSelected}`);
        const objDivBlurContainer = document.querySelector(`.containerBlur-ByProductId-${idOfProductSelected}`);

        objDivCardProduct.classList.toggle("isActive");
        objDivBlurContainer.classList.toggle("isActive");

        // seta no icon do singleCardProduct a quantidade de produto selecionado
        const objInputQtdOfProduct = document.querySelector(`#productSingleQtdOfId-${idOfProductSelected}`)
        var quantidadeDesejada = Number(objInputQtdOfProduct.value);


        const objIconSingleProduct = document.querySelector(`.iconId-${idOfProductSelected}`);
        const filhoQtdProdutos = document.createElement("span");
        filhoQtdProdutos.setAttribute("id", `qtdSelecionadaByProductId-${idOfProductSelected}`)

        // verifica se é outro contexto e evita re-append
        if(objIconSingleProduct.children[0].childElementCount > 1){
            objIconSingleProduct.children[0].children[1].textContent = quantidadeDesejada;
        }else {
            filhoQtdProdutos.appendChild(document.createTextNode(quantidadeDesejada));
            objIconSingleProduct.children[0].appendChild(filhoQtdProdutos);
        }
       
    }

    return (
    <>
    <div key={product.id} className="main-cardProduct">
        <Link to={ showLink ? `/product/${product.id}`: '#'}>
            <div className="wrapperImage">
                <img className="img--mediumSize" src={product.image} alt={product.description} />
                <span className={`iconId-${product.id}`} onClick={() => handleIconCardProductClick(product.id)}><i><FaCartArrowDown /></i></span>
                <div className="burger-title--container">
                    <h1 className="burger-title">{product.name}</h1>
                    <span className="burger-price"><p>{Intl.NumberFormat("en-US", {
                                                style: "currency", 
                                                currency: "USD"}).format(Number(product.price))}</p></span>
                </div>
            </div>              
            <MainRating id={product.id} rating={product.rating} numReviews={product.numReviews} />
        </Link>
    </div>
    <div className={`containerBlur containerBlur-ByProductId-${product.id}`} >

    </div>    
    <div className={`modalSingleProductClick cardId-${product.id}`}>
        <div>
            <h1 className="burger-title colorGreen">{product.name} <MainRating id={product.id} rating={product.rating} /></h1>
            <p className="descriptionOfSingleProduct">
                {product.description}
            </p>
            <div className="containerQuantidadeProduto">
                <label>Quantidade desejada?</label>
                <input id={`productSingleQtdOfId-${product.id}`} type="number" min="1" max="100"/>
            </div> 
            <div className="containerButtonsModalSingleProduct">
                <button onClick={() => handleConfirmModalSingleProductClick(product.id)} className="btnModalSingleProduct">Confirmar</button>
                <button onClick={() => handleCancelModalSingleProductClick(product.id)} className="btnModalSingleProduct -danger">Cancelar</button>
            </div>
        </div>
    </div>
    </>
    )
};