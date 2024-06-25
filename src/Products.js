import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import './Products.css'
import Event from './Event';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { addToCart } from './feature/cartSlice';
export default function Products() {

    const items = useSelector((state) => state.product.items);
    const dispatch=useDispatch()

    return (
        <>
            <Header />
            <section>
                <div className='product-area'>
                    <div className='container g-0'>
                        <div className='row g-0'>
                            {
                                items.map((item) =>
                                    <div className='col-md-4 col-xl-4 col-lg-4 col-sm-6 col-6 g-0'>
                                        <div className='card'>
                                            <img className='image' src={item.image}></img>
                                            <div className='card-body1'>
                                                <h4>{item.title}</h4>
                                                <p>{item.txt}</p>
                                                <p className='price'>${item.price}.00</p>
                                                <button id='button1' type='button' className='addtocart-btn'onClick={()=>dispatch(addToCart((item)))}>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}




{/* <div className='col-md-4 col-xl-4 col-lg-4 col-sm-6 col-6 g-0'>
                                <div className='card'>
                                    <img className='image' src='images/px-18.avif'></img>
                                    <div className='card-body2'>
                                        <h4>CHOCOLATE SNACK</h4>
                                        <p>Irresistible chocolate snacks bursting with flavor</p>
                                        <p className='price'>$20.00</p>
                                        <button id='button2' type='button' className='addtocart-btn'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-xl-4 col-lg-4 col-sm-6 col-6 g-0'>
                                <div className='card'>
                                    <img className='image' src='images/px-19.avif'></img>

                                    <div className='card-body3'>
                                        <h4>CHOCOLATE SNACK</h4>
                                        <p>Irresistible chocolate snacks bursting with flavor</p>
                                        <p className='price'>$20.00</p>
                                        <button id='button3' type='button' className='addtocart-btn'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-xl-4 col-lg-4 col-sm-6 col-6 g-0'>
                                <div className='card'>
                                    <img className='image' src='images/px-14.webp'></img>
                                    <div className='card-body4'>
                                        <h4>CHOCOLATE SNACK</h4>
                                        <p>Irresistible chocolate snacks bursting with flavor</p>
                                        <p className='price'>$20.00</p>
                                        <button id='button4' type='button' className='addtocart-btn'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-xl-4 col-lg-4 col-sm-6 col-6 g-0'>
                                <div className='card'>
                                    <img className='image' src='images/px-21.webp'></img>
                                    <div className='card-body5'>
                                        <h4>CHOCOLATE SNACK</h4>
                                        <p>Irresistible chocolate snacks bursting with flavor</p>
                                        <p className='price'>$20.00</p>
                                        <button id='button5' type='button' className='addtocart-btn'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-xl-4 col-lg-4 col-sm-6 col-6 g-0'>
                                <div className='card'>
                                    <img className='image' src='images/px-22.jpg'></img>
                                    <div className='card-body6'>
                                        <h4>CHOCOLATE SNACK</h4>
                                        <p>Irresistible chocolate snacks bursting with flavor</p>
                                        <p className='price'>$20.00</p>
                                        <button id='button6' type='button' className='addtocart-btn'>Add To Cart</button>
                                    </div>
                                </div>
                            </div> */}
