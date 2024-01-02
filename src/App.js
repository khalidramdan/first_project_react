import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products';
import { useEffect, useState } from 'react';

function App() {
  const [currentRoute,setCurrentRoute] = useState();
  useEffect(()=>{
    const path = window.location.pathname;
    setCurrentRoute(path.slice(1,path.length).toLocaleLowerCase())
  },[])
  return (
    <BrowserRouter>
    <nav className='m-3 p-3 border border-info rounded'>
      <ul className='nav na-pills d-flex justify-content-center'>
        <li>
          <Link onClick={()=>setCurrentRoute('home')} className={currentRoute=="home" ? "btn btn-info ms-1":"btn btn-outline-info ms-1"} to={"/home"}>Home</Link>
        </li>
        <li>
          <Link onClick={()=>setCurrentRoute("products")} className={currentRoute=="products" ? "btn btn-info ms-1":"btn btn-outline-info ms-1"}  to={"/products"}>Products</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
