import React from 'react'
import './Details.css'

export default function Details() {
    return (
        <>
            <section>
                <div className='detail-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12'>
                                <div className='detail-head'>
                                    <h1>MEET YOUR CHOCOLATIER</h1>
                                </div>
                                <div className='paragraph'>
                                    <p>Hi, I'm Hanna, a master chocolatier with a passion for creating exquisite chocolate creations. With over 15 years of experience, I have established a reputation for crafting unique and memorable chocolate flavors that push the boundaries of traditional confectionery.</p>
                                    <p>For me, the process of making chocolate is an art form. From hand-picking the finest cocoa beans to adding the perfect finishing touches to each chocolate treat, I pour my heart and soul into every creation. Nothing brings me more joy than seeing the smiles on my customers' faces when they take that first bite of my chocolate.</p>
                                    <p>That’s why from the get-go you need to figure out your selling point: is it a one-stop-chocolate solution that sells high-quality chocolate products and serves chocolate-based desserts, or do you only go for only one of those options? And do you also cater to private events such as weddings and birthdays? The choices are endless, but it’s always best to do market research first and find your niche so your brand can truly stand out. </p>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                                <div className='paragraph-img'>
                                    <img className='img-fluid' src='images/pg1.png'></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}
