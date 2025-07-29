import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Hplaptop from './Hplaptop';
import Delllaptop from './Delllaptop';
import Asuslaptop from './Asuslaptop';
import Lenovolaptop from './Lenovolaptop';
import Contact from './Contact';


function Routing() {
  return (
    <Routes>
        <Route path='home' Component={Main}/>
        <Route path='HP' Component={Hplaptop}/>
        <Route path='Dell' Component={Delllaptop}/>
        <Route path='Asus' Component={Asuslaptop}/>
        <Route path='Lenovo' Component={Lenovolaptop}/>
        <Route path='Hpx' Component={Hplaptop}/>
        <Route path='Dellex' Component={Delllaptop}/>
        <Route path='Lenovoex' Component={Lenovolaptop}/>
        <Route path="Asusex" Component={Asuslaptop}/>
        <Route path='Contact' Component={Contact}/>
    </Routes>
  )
}

export default Routing