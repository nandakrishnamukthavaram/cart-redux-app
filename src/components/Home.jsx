import React from 'react';
import '../styles/home.scss';
import ProductCard from './ProductCard';
import img1 from '../assets/macbook.jpeg';
import img2 from '../assets/shoe.webp';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const Home = () => {
    const productList = [
        { name: 'macbook', price: 12000, imgSrc: img1, id: '001' },
        { name: 'Shoes', price: 49, imgSrc: img2, id: '002' }
    ];

    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        dispatch({ type: 'addToCart', payload: options })
        dispatch({ type: 'calculate' })

        toast.success('Added To Cart');
    };
    return (
        <div className='home'>
            {productList.map(i => (
                <ProductCard key={i.id} price={i.price} imgSrc={i.imgSrc} name={i.name} id={i.id} handler={addToCartHandler} />
            ))}
        </div>
    )
}

export default Home