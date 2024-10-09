// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// custom
import '@/styles/Swiper.css'

// Import required modules
import { Scrollbar } from 'swiper/modules';


const ArticleSlider = () => {
    return (
        <div className='w-full py-10'>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{
                hide: false,
                draggable: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-[80%] h-[40rem] bg-primaryNormal rounded-3xl flex flex-col items-center justify-center'>
                        first article
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[80%] h-[40rem] bg-primaryNormal rounded-3xl flex flex-col items-center justify-center'>
                        first article
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[80%] h-[40rem] bg-primaryNormal rounded-3xl flex flex-col items-center justify-center'>
                        first article
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[80%] h-[40rem] bg-primaryNormal rounded-3xl flex flex-col items-center justify-center'>
                        first article
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ArticleSlider;