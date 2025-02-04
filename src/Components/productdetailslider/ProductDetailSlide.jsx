import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Images
import Prodetail1 from "../../assets/images/ProductDetails/1.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "./ProductDetailSlide.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const ProductDetailSlide = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className='row slider-wrapper-pro-det'>
                <div className="col-md-3">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}

                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper  prod-detail-thumb"
                        breakpoints={{
                            380: {
                                direction: "horizontal",
                                slidesPerView: 4,
                            },
                            640: {
                                direction: "horizontal",
                                slidesPerView: 4,
                            },
                            768: {
                                direction: "vertical",
                                slidesPerView: 5,

                            },
                            1024: {
                                direction: "vertical",
                                slidesPerView: 6,

                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src={Prodetail1} className='pro-det-thumb-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pro-det-thumb-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pro-det-thumb-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pro-det-thumb-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pro-det-thumb-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pro-det-thumb-img' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-md-9">
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 prod-detail-slides"
                    >
                        <SwiperSlide>
                            <img src={Prodetail1} className='pd-s-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pd-s-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pd-s-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pd-s-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pd-s-img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Prodetail1} className='pd-s-img' />
                        </SwiperSlide>

                    </Swiper>
                </div>


            </div>
        </>

    )
}

export default ProductDetailSlide
