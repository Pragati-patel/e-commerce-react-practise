import React, { useState , useEffect} from "react";
import productImg from "../../image/product.png";
import {useNavigate} from 'react-router-dom';

export default function ProductPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const sizeArr = ["XS", "S", "M", "L", "XL"];
  const colorArr = ["red-700", "black", "white"];
  const [product, setProduct] = useState({
    image: productImg,
    name: "Jaipuri Dress",
    size: "S",
    color: "Black",
    quantity: "1",
    price: "1200",
  });

 useEffect(()=>{
   setProduct({...product, "quantity":count, price:Number(product.price) * count })
   console.log("product",product)

 },[count])
  const handleSizeColor = (key, value) => {

    setProduct({...product, [key]:value})

  };
  const addCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if(cart===null){
      let cartArr=[]
      cartArr.push(product)
      localStorage.setItem("cart", JSON.stringify(cartArr))
    }
    else{
      const itemInCart = cart.findIndex((item) => {
        return item.name === product.name && item.size === product.size && item.color === product.color
        
      })
      if (itemInCart != -1) {
        console.log("cart",cart)
        console.log("itemInCart",itemInCart)
        cart[itemInCart].quantity = product.quantity
      } else {
        cart.push(product)
      }
      localStorage.setItem("cart", JSON.stringify(cart))
    }
    // localStorage.setItem("product", JSON.stringify(product));
    navigate('../MyCart/')
    console.log("cart",cart)
  };

  
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex m-4 ">
      <div className="flex">
        <img src={productImg} alt="" />
      </div>
      <div className="flex flex-col pl-8 justify-center ml-8">
        <div className="flex my-3">
          <h1 className="text-xl font-bold">Jaipuri Dress </h1>
        </div>
        <div className="flex">Rs 1200</div>
        <div className="flex flex-col my-2">
          <h1 className="text-xl font-bold">Size</h1>
          <ul className="flex">
            {sizeArr?.map((i) => {
              return (
                <li
                  className="p-2 px-3 hover:bg-red-300"
                  onClick={() => handleSizeColor("size", i)}
                >
                  {i}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-3">
          <h1 className="text-xl font-bold">Color</h1>
          {colorArr?.map((i) => {
            return (
              <button
                className={`p-2  m-2 border-2 hover:bg-${i} focus:bg-${i} hover:drop-shadow-xl ${i === 'white' ? 'hover:text-black' : 'hover:text-white'} focus:text-white`}
                onClick={() => handleSizeColor("color", i)}
              >
              {i}
              </button>
            );
          })}

          {/* <button
            className="p-2 m-2 border-2 hover:bg-red-700 hover:drop-shadow-xl focus:drop-shadow-xl focus:bg-red-700 hover:text-white focus:text-white"
            onClick={() => handleSizeColor("color", "Red")}
          >
            Red
          </button>
          <button
            className="p-2 m-2 border-2 hover:bg-slate-50   hover:drop-shadow-xl hover:text-black focus:text-black"
            onClick={() => handleSizeColor("color", "White")}
          >
            White
          </button> */}
        </div>
        <div className="my-3">
          <h1 className="text-xl font-bold">Quantity</h1>
          <div className="flex items-center">
            <button
              className="text-3xl font-semibold mr-2"
              onClick={decrement}
            >
              -
            </button>{" "}
            {count}
            <button
              className="text-3xl font-semibold ml-2"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
        <div className="my-3">
          <button
            className="p-2 border border-red-600 bg-red-600 text-white"
            onClick={addCart}
          >
            Add A Bag +
          </button>
        </div>
      </div>
    </div>
  );
}
