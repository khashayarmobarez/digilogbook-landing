'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// custom
import '@/styles/Swiper.css';

// Import required modules
import { Scrollbar, Navigation, Autoplay } from 'swiper/modules';
import LandingBlogBox from '@/components/module/Landing/LandingBlogBox';
import { useMediaQuery } from "@mui/material";
import Image from 'next/image';
import { fakeApi } from '@/utils/FakeApiBackup';

const ArticleSlider = ({blogsData}) => {
    const isDesktop = useMediaQuery('(min-width:720px)');
    const dataToDisplay = blogsData?.data || fakeApi?.data || [];

    return (
        <div className='w-full py-10 flex flex-col items-center gap-y-8'>
            <Swiper
                spaceBetween={isDesktop ? 50 : 0}
                slidesPerView={1}
                scrollbar={{
                    hide: false,
                    draggable: true,
                    dragSize: 50,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true
                }}
                navigation={isDesktop}
                modules={[Scrollbar, Navigation, Autoplay]}
                className="mySwiper"
            >
                {dataToDisplay.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <LandingBlogBox blog={blog} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="btn w-48 btn-outline rounded-3xl text-base border-accentNormal text-accentNormal hover:bg-accentNormal hover:text-primaryLightHover hover:border-none self-center
            md:self-start md:mr-[10rem] md:-mt-16">
                <ArrowForwardIcon />
                مشاهده بیشتر
            </button>
            
            <style jsx>{`
                .mySwiper .swiper {
                    height: 10px; /* Adjust the height of the scrollbar */
                    margin-bottom: -200px; /* Adjust the margin to move the scrollbar lower */
                }
            `}</style>
        </div>
    );
};

export default ArticleSlider;
