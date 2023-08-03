import React from 'react'
import '../styles/home.scss'
const ProductCard = ({ name, id, price, handler, imgSrc }) => {
    return (
        <div className='productCard'>
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <h4>${price}</h4>
            <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })} >Add to cart</button>
        </div>
    )
}

export default ProductCard