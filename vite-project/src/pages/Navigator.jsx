import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const data = {
    active_class: "({isActive})=> isActive ? 'text-red-500':'text-black'",
    active_style: '({isActive})=>({color: isActive ? "red":"black",})'
}

const nav_data = {
    tab0: "Home", tab1: "About", tab2: "Service", tab3: "Contact", tab4: "Login"
}

const cart = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
</svg>

const navs = [
    { id: 1, tab: "Home", router: '/' },
    { id: 2, tab: "About", router: '/about' },
    { id: 3, tab: "Service", router: './Service' },
    { id: 4, tab: "Contact", router: './Contact' },
    { id: 5, tab: "Login", router: './login' },
    { id: 6, tab: cart, router: './cart' },


    // { id: 6, tab: "User", router: '/user/123' },
    // { id: 7, tab: "Admin", router: '/admin' },
    //{ id: 6, tab: "Content", router: './content' },
    // { id: 6, tab: "Registration", router: './registration' }
]

export default function Navigator() {
    const nav = () => {
        return navs.map(navs => (
            <>


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink key={navs.id} className="nav-link active isActive" aria-current="page" to={navs.router} style={{ textDecorationLine: 'none' }}>{navs.tab}</NavLink>
                        
                    </li>
                </ul>

            </>


            // <NavLink key={navs.id} className=' navLink' to={navs.router}>{navs.tab}</NavLink>

        ));
    }
    // nav-link
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h1><span style={{ color: 'pink' }}>Sh</span>oppily</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {nav()}
                    </div>
                </div>
            </nav >



            {/* <nav>
                <ul className='navbar'>
                    <li className='nav-item'><NavLink className='navLink' to='/'>{nav_data.tab0}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='/about'>{nav_data.tab1}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='./Service'>{nav_data.tab2}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='./Contact'>{nav_data.tab3}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='./login'>{nav_data.tab4}</NavLink></li>
                </ul>
            </nav> */}


            {/* 
            <nav className='navbar navbar-expand-lg bg-body-tertairy'>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent' >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li style={{ display: 'flex', gap: '10px' }} className='nav-item'>{nav()}</li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div >
    )
}