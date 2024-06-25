import React, { useState } from 'react'
import Header from './Header'
import './Home.css'
import OwlCarousel from 'react-owl-carousel2';
import Accordion from 'react-bootstrap/Accordion';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import Products from './Products';

import Details from './Details';
import Event from './Event';
import Footer from './Footer';

export default function Home() {

    const [accordian1, setaccordian1] = useState(false)
    const [accordian2, setaccordian2] = useState(false)
    const [accordian3, setaccordian3] = useState(false)

    const options = {
        items: 5,
        nav: false,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            430: {
                items: 3
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1600: {
                items: 8
            }
        }
    };
    const options2 = {
        items: 5,
        nav: false,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            430: {
                items: 3
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    };

    return (

        <>
            <Header />
            <section>

                <div className='choco-head'>
                    <div className='choco-box'>
                        {/* <div className='container'>
                            <div className='row '>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'> */}
                                    <div className='choco-detail'>
                                        <h1>CHOCOLATE<br/>FAVORS</h1>
                                        <p>Unique and luxurious chocolate </p>
                                        <p>wedding favors that will leave a lasting</p>
                                        <p>impression on your guests.</p>
                                    </div>
                                </div>
                            </div>
                        {/* </div>
                    </div>
                </div> */}
                <div>

                </div>

            </section>
            <section>
                <div className='unique-area'>
                    <div className='container g-0'>
                        <div className='row '>
                            <div className=' col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 g-0 '>
                                <div className='unique-text'>
                                    <div className='u-title'>
                                        <p>12 UNIQUE FLAVORS</p>
                                    </div>
                                    <div className='unique-area1'>
                                        <h2>DISCOVER OUR</h2>
                                        <h2>ELEGANT AND</h2>
                                        <h2>UNIQUE CHOCOLATE</h2>
                                        <h2>FLAVORS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className=' col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 g-0'>
                                <div className='unique-img'>
                                    <img className='img-fluid' src='/images/unique.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='first-carousel'>
                        <OwlCarousel options={options}  >
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide1.png" alt="" />
                                </div>
                                <h4>Soft Pink</h4>
                                <p>Raspberry </p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide2.png" alt="" />
                                </div>

                                <h4>LILAC</h4>
                                <p>Passion Fruit</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide3.png" alt="" />
                                </div>

                                <h4>Flamingo Pink</h4>
                                <p>Baileys and Caramel</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide4.png" alt="" />
                                </div>

                                <h4>LAGUNA </h4>
                                <p>EARL GREY&LEMON</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide5.png" alt="" />
                                </div>

                                <h4>TIFFANY</h4>
                                <p>HAZELNUT GIANDUJA</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide1.png" alt="" />
                                </div>
                                <h4>Soft Pink</h4>
                                <p>Raspberry and Caramel</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide2.png" alt="" />
                                </div>

                                <h4>LILAC</h4>
                                <p>Passion Fruit</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide3.png" alt="" />
                                </div>

                                <h4>Flamingo </h4>
                                <p>Baileys </p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide4.png" alt="" />
                                </div>

                                <h4>LAGUNA </h4>
                                <p>EARL GREY</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide5.png" alt="" />
                                </div>

                                <h4>TIFFANY</h4>
                                <p>PISTACHIO </p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide1.png" alt="" />
                                </div>
                                <h4>Soft Pink</h4>
                                <p>Raspberry and Caramel</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide2.png" alt="" />
                                </div>

                                <h4>LILAC</h4>
                                <p>Passion Fruit</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide3.png" alt="" />
                                </div>

                                <h4>Flamingo </h4>
                                <p>Baileys and Caramel</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide4.png" alt="" />
                                </div>

                                <h4>LAGUNA </h4>
                                <p>EARL GREY</p>
                            </div>
                            <div class="item">
                                <div class="slide-img">

                                    <img src="images/slide5.png" alt="" />
                                </div>

                                <h4>TIFFANY</h4>
                                <p>PISTACHIO</p>

                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </section>
            <section>
                <div className='product-heading'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='u-title'>
                                    <p>PRODUCT</p>
                                </div>
                                <h5>
                                    Our chocolate favors are the perfect<br></br>
                                    addition to any special occasion!
                                </h5>
                                <h1>
                                    SWEETEN ANY<br></br>
                                    OCCASION WITH OUR<br></br>
                                    CHOCOLATE FAVORS!
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            <Products />
            <section>
                <div className='gallery-heading'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12'>
                                <div className='u-title'>
                                    <p>PRODUCT GALLERY</p>
                                </div>
                                <h2>WHAT OUR<br></br>
                                    PRODUCTS LOOK LIKE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='product-gallery'>
                    <OwlCarousel options={options} >
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx10.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx7.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx6.webp" alt="" />
                            </div>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx5.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx8.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx10.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx7.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx6.webp" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx5.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx8.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx10.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx7.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx6.webp" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx5.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="slide-img">

                                <img src="images/kx8.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section>
                <div className='question-area'>
                    <div className='container  g-0'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='question-box'>
                                    <div className='unique-title'>
                                        <p>FAQ</p>
                                    </div>

                                    <h1>
                                        FREQUENTLY ASKED<br></br>
                                        QUESTIONS
                                    </h1>
                                </div>
                                <div className='accordian-box'>
                                    <div className='accordian-head'>
                                        <div className='accordian-1' onMouseLeave={() => setaccordian1(false)}>
                                            <h4 onMouseEnter={() => setaccordian1(true)}>Care Instructions</h4> <span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </span>
                                            <div class="accordian-info-1 accordion-content" >
                                                {
                                                    accordian1 ?
                                                        (<p> Do not freeze or keep in the fridge. The chocolate <br /> comfort temperature
                                                            is
                                                            between 50-73 F (10-23C). </p>) : (<span></span>)
                                                }
                                            </div>

                                        </div>

                                    </div>
                                    <div className='accordian-head'>
                                        <div className='accordian-2' onMouseLeave={() => setaccordian2(false)}>
                                            <h4 onMouseEnter={() => setaccordian2(true)}>Shelf Life time for chocolate</h4> <span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </span>
                                            <div class="accordian-info-1 accordion-content" >
                                                {
                                                    accordian2 ?
                                                        (<p> Do not freeze or keep in the fridge. The chocolate <br /> comfort temperature
                                                            is
                                                            between 50-73 F (10-23C). </p>) : (<span></span>)
                                                }
                                            </div>

                                        </div>

                                    </div>
                                    <div className='accordian-head'>
                                        <div className='accordian-3' onMouseLeave={() => setaccordian3(false)}>
                                            <h4 onMouseEnter={() => setaccordian3(true)}>Shelf Life time for chocolate</h4> <span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </span>
                                            <div class="accordian-info-1 accordion-content" >
                                                {
                                                    accordian3 ?
                                                        (<p> Do not freeze or keep in the fridge. The chocolate <br /> comfort temperature
                                                            is
                                                            between 50-73 F (10-23C). </p>) : (<span></span>)
                                                }
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Details />
                <Event />
                <Footer />
            </section>

        </>
    )
}
