import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
//import About from './pages/About'

import Contact from './pages/contact'
import Error from './pages/error'
import Preview from './pages/preview'
import Service from './pages/Service'
import Dashboard from './pages/Dashboard'
import Contents from './pages/Contents'
import Login from './pages/Login'
import Registeration from './pages/registeration'
import PopModal from './pages/popModal'
import Sitemap from './pages/Sitemap'

//import Admin from './pages/Admin'
//import User from './pages/User'

const About = lazy(() => import('./pages/About'))
const Admin = lazy(() => import('./components/Admin'))
const User = lazy(() => import('./pages/User'))


export default function App() {

  return (
    <div className='main'>
      <BrowserRouter>
        <Layout />

        <Suspense fallback={<div className='text-center fs-3'>. . . Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path='/service' element={<Service />}></Route>
            <Route path='contact' element={<Contact />}></Route>

            <Route path='/details' element={<Preview />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registeration />} />
            <Route path='/popModal' element={<PopModal />} />

            <Route path='dashboard' element={<Dashboard />}>
              <Route index path='sitemap' element={<Sitemap />} />
              <Route path='content' element={<Contents />} />
            </Route>

            <Route path='/user/:id' element={User} /> {/* Dynamic Routing */}
            <Route path='/admin' element={Admin} />
            <Route path='/*' element={<Error />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}