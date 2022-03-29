import React, { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import product from "../../image/pro.png";
import { GrFormClose } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";
export default function MyCart() {
  const getValue = JSON.parse(localStorage.getItem("cart"));
  const [dynamicPro, setDynamicPro] = useState(getValue);
  // console.log("dynamicPro", dynamicPro);



  const handleDelete = (i) => {
    const updatedCart = dynamicPro.filter((item) => item !== dynamicPro[i]);
    setDynamicPro(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("test", updatedCart);
  };

  const increaseQuantity=(i)=>{
   const temp = [...dynamicPro]
   temp[i].quantity = temp[i].quantity +1;
   temp[i].price = temp[i].price*2;
   console.log("index temp",i,temp)
   setDynamicPro(temp)
   localStorage.setItem("cart",JSON.stringify(temp))
  }
  useEffect(()=>{
    console.log("dynamicPro",dynamicPro)
  },[dynamicPro])
 
  return (
    <>
      <div className="flex justify-between m-4 p-4 ">
        <div className="text-xl font-bold">My Cart</div>
        <div className="flex">
          <span>
            <BiCart size={"1.5rem"} />
          </span>
          <h2>{dynamicPro.length}</h2>
        </div>
      </div>
      <div className="flex flex-col m-4 p-4 ">
        {dynamicPro?.map((v, i) => {
          return (
            <>
              <div className="flex  m-8 bg-slate-300 rounded-lg w-60 mx-auto relative">
                <div className="flex">
                  <img src={v.image} alt="" className="w-100 max-h-40" />
                </div>
                <div className="flex flex-col ml-8 justify-center">
                  <h1>{v.name}</h1>
                  <h1>product size : {v.size}</h1>
                  <h1>product color :{v.color}</h1>
                  <h1>
                    Quantity:
                    <button className="flex justify-center items-center bg-red-700 px-3 py-0 text-white">
                      {v.quantity}
                      <AiFillCaretDown size={"1.2rem"} onClick={()=>increaseQuantity(i)}/>
                    </button>{" "}
                  </h1>
                  <h1>price: {v.price}</h1>
                </div>

                <div
                  className="flex absolute top-2 right-2 cursor-pointer"
                  onClick={() => handleDelete(i)}
                >
                  <GrFormClose size={"1.5rem"} />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex mb-6">
        <button className="py-1 px-3 bg-red-700 text-white mx-auto">
          CheckOut
        </button>
      </div>
    </>
  );
}
