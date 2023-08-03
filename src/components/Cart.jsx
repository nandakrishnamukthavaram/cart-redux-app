import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import '../styles/cart.scss';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {

    const { cartItems } = useSelector((state) => (state.cart));
    console.log(cartItems);
    const { cart } = useSelector((state) => (state));

    let Total = 0;
    let Tax = 0;
    cartItems.forEach((i) => {

    });

    const dispatch = useDispatch();
    const decrement = (id) => {
        dispatch({
            type: 'decrement', payload: { id }
        })

        dispatch({
            type: 'calculate'
        })
    };
    const increment = (id) => {
        dispatch({
            type: 'addToCart', payload: { id }
        })

        dispatch({
            type: 'calculate'
        })
    };
    const deleteHandler = (id) => {
        dispatch({
            type: 'delete', payload: { id }
        })

        dispatch({
            type: 'calculate'
        })
    };
    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => (
                            <CartItem
                                imgSrc={i.imgSrc}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                decrement={decrement}
                                increment={increment}
                                deleteHandler={deleteHandler}
                                id={i.id}
                            />
                        ))
                    ) : (
                        <h1>No Items Yet</h1>
                    )
                }
            </main>
            <aside>
                <h2>Subtotal: ${cart.subtotal}</h2>
                <h2>Shipping: ${cart.shipping}</h2>
                <h2>Tax: ${cart.tax}</h2>
                <h2>Total: ${cart.total}</h2>
            </aside>
        </div>
    )
}


const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {
    return (
        <div className="cartItem">
            <img src={imgSrc} alt="item" />
            <article>
                <h3>{name}</h3>
                <p>${price}</p>
            </article>
            <div>
                <button onClick={() => { decrement(id) }}>-</button>
                <p>{qty}</p>
                <button onClick={() => { increment(id) }}>+</button>
            </div>
            <AiFillDelete onClick={() => { deleteHandler(id) }} />
        </div>
    )
}

export default Cart