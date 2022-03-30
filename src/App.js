import react, { useState, useContext, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/HomePage/Home";
import ProductPage from "./component/ProductPage/ProductPage";
import MyCart from "./component/MyCart/MyCart";
import ShippingForm from "./component/Shipping/ShippingForm";
import Images from "./component/ImagesPage/Images";
import SelectedImages from "./component/ImagesPage/SelectedImages";
import { PrimaryContextProvider } from "./context/primaryContext";

function App() {

  return (
      <PrimaryContextProvider>
      <div className="app__wrap">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/shipping" element={<ShippingForm />} />
            <Route
              path="/images"
              element={<Images />}
            />
            <Route path="/selectedimages" element={<SelectedImages />} />
          </Routes>
        </BrowserRouter>
      </div>
      </PrimaryContextProvider>
  );
}

export default App;
