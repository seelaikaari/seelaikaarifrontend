// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Items from "../../Components/items/Items"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//Css
import "./SimilarProduct.css"

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';


const SimilarProduct = () => {
    return (
        <>
            <div>
                <Swiper
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
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
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper similar-product-swiper"
                >
                    <SwiperSlide>
                        <Items/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Items/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Items/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default SimilarProduct
