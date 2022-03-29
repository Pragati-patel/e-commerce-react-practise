import React from "react";
import CategorySlider from "./CategorySlider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import menCategory from "../../image/category/men.svg";
import womenCategory from "../../image/category/women.svg";
import latestCategory from "../../image/category/latest.svg";
import sumerCategory from "../../image/category/summer.svg";
import festivalCategory from "../../image/category/festivals.svg";
import BestChoice from "./BestChoice";
import {useNavigate} from 'react-router-dom';
import "./Home.css";
import NewArrival from "./NewArrival";

export default function Home() {
  const navigate = useNavigate()
  const categoryItem = [
    { img: menCategory },
    { img: womenCategory },
    { img: sumerCategory },
    { img: festivalCategory },
    { img: latestCategory },
  ];
  const bestChoiceItems = [1, 2, 3, 4, 5];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="p-4 my-4 ml-4">
        <Carousel
          responsive={responsive}
          // itemClass = 'carouselItemClass'
          // sliderClass = 'carouselSliderClass'
          // ssr={true} // means to render carousel on server-side.
          // autoPlaySpeed={1000}
        >
          {categoryItem?.map((item,i) => {
            return (
              <div className="w-fit cursor-pointer" key={i} onClick={()=>navigate('../ProductPage')}>
                <CategorySlider img={item.img} />
              </div>
            );
          })}
        </Carousel>
      </div>
<div className="m-4 p-2"><h1 className="ml-4 font-bold text-2xl">Best Choices</h1></div>
<div className="ml-4 p-4">
<Carousel responsive={responsive} >
        {bestChoiceItems?.map((item) => {
          return (
            <div className="cursor-pointer" onClick={()=>navigate('../ProductPage')}>
              <BestChoice
                bg={{
                  background:
                    "linear-gradient(90deg, #FFECD2 0%, #FCB69F 100%)",
                }}
              />
            </div>
          );
        })}
      </Carousel>
</div>
     
      <div className="m-4 p-2 "><h1 className="ml-4 font-bold text-2xl">New Arrivals</h1></div>
      <div className=" flex m-4 p-2">
      {bestChoiceItems?.map((item)=>{
        return   <div className="flex m-2"><NewArrival/></div> 
      })}
     
      </div>
    </>
  );
}
