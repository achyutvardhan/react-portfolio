import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import db from "../db.json";
import ContentBox from './ContentBox';
export default function Carousel() {
  const {data} = db
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 0,
    speed: 30000,
    slidesToShow: 4.5,
    slidesToScroll: 6,
    autoplay : true,
    accessibility:false,
    draggable:false,
    pauseOnHover:false,
    centerPadding: '20px',
    ease:'ease-out',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint:750,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint:520,
        settings:{
          slidesToShow:1.5
        }
      },
      {
        breakpoint:390,
        settings:{
          slidesToShow:1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      {data.map((Data,i)=>
        <ContentBox Data = {Data} key = {i} />
      )

      }
    </Slider>
  )
}
