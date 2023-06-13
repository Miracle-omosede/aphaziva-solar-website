import React from 'react'
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/swiper.css'
import "./Products.css"
import data from "./slider.json"

const Products = () => {
    const swiperSettings = {
        slidesPerView: 1,
        spaceBetween: 50,
        breakpoints: {
          480: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        },
      };
    
  return (
   <section className="r-wrapper pt-10 bg-white">
    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className='orangeText'>Recent</span>
            <span className='primaryText'>Projects</span>
        </div>

        <Swiper {...swiperSettings}>
            <SliderButtons />
            {
                data.map((card, i)=> (
                    <SwiperSlide key={i}>
                        <div className='flexColStart r-card'>
                            <img src={card.image} alt="home" className='rounded-xl'/>

                            <span className='secondaryText r-price'>
                                {/* <span style={{color: "orange"}}>$</span>
                                <span>{card.price}</span> */}
                            </span>

                            <span className='primaryText'>{card.name}</span>
                            {/* <span className='secondaryText'>{card.detail}</span> */}
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
   </section>
  )
}

export default Products

const SliderButtons = ()=> {
    const swiper = useSwiper ();
    return (
        <div className='r-buttons flexCenter'>
            <button onClick={()=> swiper.slidePrev ()}>&lt;</button>
            <button onClick={()=> swiper.slideNext ()}>&gt;</button>
        </div>
    )
}