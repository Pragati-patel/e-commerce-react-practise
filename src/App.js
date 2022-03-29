import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import {useState} from 'react'
import Navbar from './component/Navbar/Navbar';
import Home from './component/HomePage/Home';
import ProductPage from './component/ProductPage/ProductPage';
import MyCart from './component/MyCart/MyCart';
import ShippingForm from './component/Shipping/ShippingForm';
import Images from './component/ImagesPage/Images';
import SelectedImages from './component/ImagesPage/SelectedImages';
function App() {
  const [user, setuser] = useState("Pragati")
  return (
   <div className="app__wrap">
   
   <BrowserRouter>
     <Navbar state={user} />
     <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/productpage' element={<ProductPage/>} />
     <Route path='/mycart' element={<MyCart/>}/>
     <Route path='/shipping' element={<ShippingForm/>}/>
     <Route path='/images' element={<Images changeUser={val => setuser(val)} />}/>
     <Route path='/selectedimages' element={<SelectedImages/>}/>
     </Routes>

   </BrowserRouter>
     
   </div>
  );
}

export default App;
