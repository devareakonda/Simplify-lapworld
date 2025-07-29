
import './App.css';
import AOS from 'aos';
// import '.aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Myfiles.js/Navbar';
import Footer from './Myfiles.js/Footer';
import Router from './Myfiles.js/Router';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    AOS.init({duration:3000})
  })
  return (
    <div className="bg-dark App">
      <Navbar/>
      <Router/>
     <Footer/>
    
    </div>
  );
}

export default App;
