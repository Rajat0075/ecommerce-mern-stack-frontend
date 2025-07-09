
import { href } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Footer() {
    return (
        <>
            {/**  <footer className="container-xl">

                <div className="container-fluid">
                    <div style={{ marginRight: '10%' }}>
                        <h2>Service</h2>
                        <a href="#">MERN Stack Developer</a><br />
                        <a href="#">Angular Developer</a><br />
                        <a href="#">WordPress Developer</a>
                    </div>
                    <div>
                        <h2>Pages</h2>

                        <a href="/sitemap">Sitemap</a>
                    </div>
                    <div style={{}}>
                        <h2>Subscribe </h2>
                    </div>
                </div>
                <p>{new Date().getFullYear()} My Website. All rights reserved.</p>
            </footer> */}

            <div className='j'>
                <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                    <div className="col-md-4 d-flex align-items-center">
                        <div style={{color:'white'}}>
                            <h3>Links</h3>
                            <ul>
                                <li style={{color:'blue'}}><a href="/sitemap">SiteMap</a></li>
                            </ul>
                        </div>

                        <a href="/" className='mb-3 me-2 mb-md-0 text-muted text-decoration-none 1h-1'>
                            <svg className='bi' width="30px" height="24">
                                <use xlink:href="#bootstrap"></use>
                            </svg>
                        </a> 
                        <span className='text-muted'>&Copyright 2025 Company, Inc</span>
                    </div>
                </footer>
            </div>
        </>
    )
}