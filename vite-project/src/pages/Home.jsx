import { useContext, useEffect, useState } from 'react'
import file from '../assets/resume.pdf'
import Footer from '../components/Footer'
import motorola from '../assets/motorol.png'
import vivo from '../assets/vivo.png'
import samsungS23 from '../assets/samsung galacy.png'

import samsung from '../assets/samsung.jpg'
import realme from '../assets/realme.jpg'
//Bannners
// import Boat from '../assets/boat.jpg'
import Banner from '../assets/fashion-trends-sale-banner.jpg'
import beauty from '../assets/beauty.png'
import Banner2 from '../assets/Banner.png'
import Banner3 from '../assets/Banner3.png'
// import Watch from '../assets/Watch.jpg'

import Fashion_Men from '../assets/fashion_men.png'
import Fashion_Female from '../assets/fashion-women.png'
import Beauty from '../assets/beauty.jpg'
import Device from '../assets/device.png'
import Decoration from '../assets/homeDecoration.jpg'

import tshirt from '../assets/tshirt.png'
import pant from '../assets/trouser.png'
import shirt from '../assets/shirt.jpg'
import watch from '../assets/watch.png'
 
import Redux from './redux'

const cart = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
</svg>
const cart_success = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
</svg>

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Add to Cart');
const notify_buy = () => toast.success('Successfully Added!');




const user = { name: 'Rajat Kumar', }

const category = [
    { id: 1, category: "Fashion Men's", description: 'TShirt, Pants', image: Fashion_Men, url:'/dashboard/content' },
    { id: 2, category: "Fashion Female's", description: 'Tshirt, Saree', image: Fashion_Female, url:'/dashboard/content'  },
    { id: 3, category: 'Beaty', description: 'Perfume, Pins', image: Beauty, url:'/dashboard/content'  },
    { id: 4, category: 'Device', description: 'computer,laptop', image: Device, url:'/dashboard/content'  },
    { id: 5, category: 'Home Decortion', description: 'Painting,Light', image: Decoration, url:'/dashboard/content' },
]
const men = [
    { 
        id: 1,
        image: tshirt,
        title: 'T-shirt',
        descrition: '100% Cotton',
        price: 150,
        mrp: 200,
        color: ' Red, Green, Black, Blue'
    },
    { id: 2, image: pant, title: 'Pant' },
    { id: 3, image: shirt, title: 'shirt' },
    { id: 4, image: pant, title: 'Pant' },
    { id: 5, image: watch, title: 'watch' },
]
const sale = [
    { id: 1, category: 'Fashion', sale: 'weekend', image: 'https://img.freepik.com/free-vector/fashion-trends-sale-banner-template_23-2150769839.jpg' }
]

const mobile = [
    { id: 1, brand: 'Motorola G45', image: motorola, price: 11000, mrp: 15000 },
    { id: 2, brand: 'Nokia', image: motorola, price: 10000,mrp: 14000 },
    { id: 3, brand: 'Vivo V5G', image: vivo, price: 15000, mrp: 18000},
    { id: 4, brand: 'Samsung Galaxy S23 Ultra 5G ', image: samsungS23, price: 25000,mrp: 28000 },
    { id: 5, brand: 'Samsung Galaxy', image: samsung, price: 15000, mrp: 17000 },
    { id: 6, brand: 'Realme C35', image: realme, price: 14000,mrp: 18000 }
]

export default function Home() {
    //Redux
    const cartItem = [
        { id: 1, title: 'Motorola', price: '120', description: 'Good Motorola', category: 'mobile', image: motorola, rating: { rate: 3.9, count: 120 } },
        { id: 2, title: 'Samsung', price: '130', description: 'Good samsung', category: 'mobile', image: samsung, rating: { rate: 5.9, count: 140 } }
    ]

    // useState
    // const [mobile, setMobile] = useState([]); //Mobile DataAPI
    let [modalstatus, setModalstatus] = useState(true) //Enqury
    // DataAPI
    // useEffect(() => {
    //     fetch('api/users').then((response) => response.json()).then((dataAPI) => setMobile(dataAPI));
    // }, []);

    //    Object
    const data = mobile.map(mobile => (
        <div key={mobile.id} className='col' >
            <div className="product-card card" style={{padding: '0%'}}>
                <img src={mobile.image} className="product-img card-img-top img-fluid rounded" alt="..." />
                <div className="card-body">
                    <h5 className="product-title card-title">{mobile.brand}</h5>
                    <p className="card-text">Brillliant Green, 8GB RAM, 128GB Storage</p>
                    <h6>Price: {mobile.price}</h6>
                    <p>MRP: <span style={{textDecorationLine:'line-through'}}>{mobile.mrp}</span></p>
                    <div >
                        <a href="#" className="product-btn btn btn-primary" onClick={notify}>Add Cart</a>
                        <Toaster />
                        <a href="#" className="product-btn btn btn-primary" onClick={notify_buy}>Buy</a>
                    </div>
                </div>
            </div>
        </div>
    ))
    const category_data = category.map(category => (
        
        <div key={category.id} className='col' >
           <a href={category.url}> 
            <div className="product-card card" style={{ padding: '10px' }}>
                <img src={category.image} className="product-img card-img-top img-fluid rounded" alt="..." />
                <div className="card-body">
                    <h5 className="product-title card-title">{category.category}</h5>
                    <p className="card-text">{category.description}</p>
                </div>
            </div>
             </a>
        </div>            
       

    ))

    const men_data = men.map(men => (
        <div key={men.id} className='col' >
            <div className="product-card card" style={{ padding: '10px' }}>
                <img src={men.image} className="product-img card-img-top img-fluid rounded" alt="..." />
                <div className="card-body">
                    <h5 className="product-title card-title">{men.title}</h5>
                </div>
                <div >
                    <a href="#" className="product-btn btn btn-primary" onClick={notify}>Add Cart</a>
                    <Toaster />
                    <a href="#" className="product-btn btn btn-primary" onClick={notify_buy}>Buy</a>
                </div>
            </div>
        </div>
    )) 

    return (
        <>
            <div className='main-cover'>
                {/* Enqury Section */}
                <div className='container' style={{ textAlign: 'center', marginBottom: '51px' }}>
                    <ImageSlider />
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                            // Define default options
                            className: '',  
                            duration: 5000,
                            removeDelay: 1000,
                            style: {
                                background: '#363636',
                                color: '#fff',
                            },

                            // Default options for specific types
                            success: {
                                duration: 3000,
                                iconTheme: {
                                    primary: 'green',
                                    secondary: 'black',
                                },
                            },
                        }}
                    />
                    <marquee behavior="sliding" loop direction="" scrolldelay='50'>
                        <img className='img-fluid img-banner' src={Banner2} style={{ width: '100%', marginRight: '10%', placeItems: 'center' }} />

                        <img className='img-fluid img-banner' src={beauty} style={{ width: '60%', marginRight: '10%', placeItems: 'center' }} />
                        <img className='img-fluid img-banner' src={Banner} style={{ width: '60%', marginRight: '10%', placeItems: 'center' }} />
                    </marquee>
                    {/* <img className='img-fluid' src={samsungS23} /> */}
                </div>
                <div>
                    <button className='en' type="button" onClick={() => setModalstatus(true)}>Enquiry</button>
                    <div className={`modalOverlay ${modalstatus ? 'modalShow' : ''}`} >
                        <div className={`ModalDiv ${modalstatus ? 'showModalDiv' : ''}`}>
                            <h3 className='text-center'>Enquiry Now <span onClick={() => setModalstatus(false)}>&times;</span></h3>
                            <p className='text-center' style={{ fontFamily: 'cursive' }}>Hey Friend!</p>
                        </div>
                    </div>
                </div>
                {/*  Enquiry Section */}
                <div className='container'>
                    <h2>Category</h2>
                    <div className='row'>
                        {category_data}

                    </div>
                </div>
                <img className='img-fluid img-banner' src={Banner2} style={{ width: '100%', marginRight: '10%', placeItems: 'center' }} />

                <div className='container'>
                    <h2>Mobiles</h2>
                    <div className='row'>
                        {data}
                    </div>
                </div>
                <div className='container'>
                    <h2>Men's Fashion</h2>
                    <div className='row'>
                        {men_data}
                    </div>
                </div> 
                <br />
                <br />
                <Social_Media />
                <Footer />
            </div >

        </>
    )
}

function Social_Media() {
    return (
        <div className="container align-center">
            <ul className="social-media">
                <li><a className='a-media' href="#" style={{ color: 'black', backgroundColor: 'white' }}>GitHub</a></li>
                <li><a className='a-media' href="#" style={{ color: 'blue', backgroundColor: 'white' }}>Linkled</a></li>
                <li><a className='a-media' href="#" style={{ color: 'red', backgroundColor: 'pink' }}>Instagram</a></li>
                <li><a className='a-media' href="#" style={{ color: 'white', backgroundColor: 'red' }}>YouTube</a></li>
            </ul>
        </div>
    )
}

function ImageSlider() {
    const images = [
        //    Boat,
        Banner,
        beauty,
        Banner2,
        Banner3,
        // Watch
    ];

    const [index, setIndex] = useState(0);
    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);



    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <img className='img-fluid img-banner' src={images[index]} style={{ width: '100%', marginRight: '10%', placeItems: 'center' }} />
                <div>
                    <button onClick={prev} >Prev</button>
                    <button onClick={next}>Next</button>
                </div>
            </div>
            <div>
            </div>
        </>

    )
}