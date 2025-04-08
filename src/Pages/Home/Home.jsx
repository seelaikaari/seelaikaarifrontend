import HomeCategory from "../../Components/homecategories/HomeCategory";
//images


import banner1 from "../../assets/images/banner-images/home-banner-1.jpg"
import product1 from "../../assets/images/pose-1/prod-1.jpg"
import product2 from "../../assets/images/pose-1/prod-2.jpg"
import product3 from "../../assets/images/pose-1/prod-3.jpg"
import product4 from "../../assets/images/pose-1/prod-4.jpg"
import product5 from "../../assets/images/pose-1/prod-5.jpg"
import product31 from "../../assets/images/pose-2/prod-31.jpg"
import product32 from "../../assets/images/pose-2/prod-32.jpg"
import product33 from "../../assets/images/pose-2/prod-33.jpg"
import product34 from "../../assets/images/pose-2/prod-34.jpg"
import product35 from "../../assets/images/pose-2/prod-35.jpg"
import product61 from "../../assets/images/pose-3/prod-61.jpg"
import product62 from "../../assets/images/pose-3/prod-62.jpg"

import product63 from "../../assets/images/pose-3/prod-63.jpg"
import product64 from "../../assets/images/pose-3/prod-64.jpg"
import product65 from "../../assets/images/pose-3/prod-65.jpg"
import product66 from "../../assets/images/pose-3/prod-66.jpg"
import product67 from "../../assets/images/pose-3/prod-67.jpg"
import product68 from "../../assets/images/pose-3/prod-68.jpg"
import product69 from "../../assets/images/pose-3/prod-69.jpg"

import product36 from "../../assets/images/pose-2/prod-36.jpg"
import product37 from "../../assets/images/pose-2/prod-37.jpg"
import product38 from "../../assets/images/pose-2/prod-38.jpg"
import product39 from "../../assets/images/pose-2/prod-39.jpg"
import product40 from "../../assets/images/pose-2/prod-40.jpg"
import product41 from "../../assets/images/pose-2/prod-41.jpg"
import product42 from "../../assets/images/pose-2/prod-42.jpg"
import product43 from "../../assets/images/pose-2/prod-43.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination,Autoplay,Navigation } from 'swiper/modules';

//icons 
// import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";

//Css
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate =useNavigate();

  const handleNavigate=(itemcategory)=>{
    navigate("/Product", { state: { category: itemcategory } });
  }
  const homeBanner=[
    {
      img:banner1,
      imgCaption:"Banner1"
    },
  ]
  const EssentialSlider=[
    {
      img:product1,
      imgCaption:"product1"
    },
    {
      img:product2,
      imgCaption:"product2"
    },
    {
      img:product3,
      imgCaption:"product3"
    },
    {
      img:product4,
      imgCaption:"product4"
    },
    {
      img:product5,
      imgCaption:"product5"
    },
    {
      img:product31,
      imgCaption:"product31"
    },
    {
      img:product32,
      imgCaption:"product32"
    },
    {
      img:product33,
      imgCaption:"product33"
    },
  ]
  const bestSelling=[
    {
      img:product36,
      imgCaption:"product36"
    },
    {
      img:product37,
      imgCaption:"product37"
    },
    {
      img:product38,
      imgCaption:"product38"
    },
    {
      img:product39,
      imgCaption:"product39"
    },
    {
      img:product40,
      imgCaption:"product40"
    },
    {
      img:product41,
      imgCaption:"product42"
    },
    {
      img:product43,
      imgCaption:"product43"
    },
  ]
  const Category=[
    {
      img:product61,
      imgCaption:"product61"
    },
    {
      img:product62,
      imgCaption:"product62"
    },
    {
      img:product63,
      imgCaption:"product63"
    },
    {
      img:product64,
      imgCaption:"product64"
    },
    {
      img:product65,
      imgCaption:"product65"
    },
    {
      img:product66,
      imgCaption:"product66"
    },
    {
      img:product67,
      imgCaption:"product67"
    },
    {
      img:product68,
      imgCaption:"product68"
    },
  ]
  return (
    <>
      <section className="home-sec-1-wrapper">
        <div className="container-fluid ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {homeBanner.map((items, index) => (
              <SwiperSlide key={index}>
                <img src={items.img} alt={items.imgCaption} className="w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="home-sec-2-wrapper hom-sec2-bg">
        <div className="container">
            <div className="row row-gap-5">
              <div className="col-md-4">
                <h4 className="sec-2-h-Ct">Wedding Wardrobe Essentials!</h4>
                <p className="sec-2-p-ct">Explore this much-loved collection of striking that travel effortlessly from a day at work to an evening out.</p>
                <button className="btn-Shop-t" onClick={()=>handleNavigate("WeddingEssentials")}><AiOutlineShoppingCart/> Shop Now </button>
              </div>
              <div className="col-md-8">
                <Swiper
                  centeredSlides={true}
                  spaceBetween={30}
                  loop={true}
                  grabCursor={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  breakpoints={{
                   380: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView:3,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {EssentialSlider.map((items,index)=>(
                      <SwiperSlide key={index}>
                        <div>
                          <img src={items.img} className="w-100" alt={items.imgCaption} />
                        </div>
                      </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
        </div>
      </section>

      <section className="home-sec-2-wrapper hom-sec3-cat-bg">
        <div className="container">
              <h2 className="title-home">Shop By Category</h2>
              <div className="row my-4 row-gap-4">
                {Category.map((items,index)=>
                  <div className="col-md-3 col-6" key={index}>
                    <HomeCategory items={items} handleNavigate={handleNavigate} />
                  </div>
                )}
              </div>
        </div>
      </section>

      <section className="home-sec-2-wrapper sect-4-bg-texture">
        <div className="container">
            <div className="row row-gap-5">
            <div className="col-md-8">
                <Swiper
                  centeredSlides={true}
                  spaceBetween={30}
                  loop={true}
                  grabCursor={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  breakpoints={{
                   380: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView:3,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {bestSelling.map((item,index)=>
                     <SwiperSlide key={index}>
                      <div>
                        <img src={item.img} className="w-100" alt={item.imgCaption} />
                      </div>
                    </SwiperSlide>
                  )}
                 
                  
                  
                </Swiper>
              </div>
              <div className="col-md-4">
                <h4 className="sec-2-h-Ct">Best Selling Products!</h4>
                <p className="sec-2-p-ct">Explore a selection of exquisite fabric lengths woven in fine silk, the perfect accompaniments to your favourite saris this festive season.</p>
                <button className="btn-Shop-t" onClick={()=>handleNavigate("BestSelling")}><AiOutlineShoppingCart/> Shop Now </button>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home