import { Routes, Route, useLocation } from 'react-router-dom'
import Productpage from './pages/Productpage'
import Layout from './components/Layout'
import Aboutpage from './pages/Aboutpage'
import Basketpage from './pages/Basketpage'
import Catalogpage from './pages/Catalogpage'
import Contactspage from './pages/Contactspage'
import Deliverypage from './pages/Deliverypage'
import Favoritepage from './pages/Favoritepage'
import Homepage from './pages/Homepage'
import Notfoundpage from './pages/Notfoundpage'
import Servicespage from './pages/Servicespage'
import Teachingpage from './pages/Teachingpage'
import { useEffect } from 'react'

export default function App() {
  const path = useLocation()
  useEffect(() => 
    window.scrollTo(0, 0)
  , [path])
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage/>}/>
          <Route path='about' element={<Aboutpage/>}/>
          <Route path='catalog' element={<Catalogpage/>}/>
          <Route path='catalog/:id' element={<Productpage/>} />
          <Route path='contacts' element={<Contactspage/>}/>
          <Route path='delivery' element={<Deliverypage/>}/>
          <Route path='services' element={<Servicespage/>}/>
          <Route path='teaching' element={<Teachingpage/>}/>
          <Route path='favorite' element={<Favoritepage/>}/>
          <Route path='basket' element={<Basketpage/>}/>
          <Route path='*' element={<Notfoundpage />} />
        </Route>
    </Routes>
    </>
    )
}

