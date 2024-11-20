'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
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
        <div className='w-full flex justify-center relative'>
            <div className=' top-0 w-full pt-8 flex flex-col items-center gap-y-8 overflow-hidden'>
                <Swiper
                    effect="cards" // Enable cube effect
                    spaceBetween={0} // Must be 0 for cube effect
                    slidesPerView={1} // Cube effect works best with one slide per view
                    cardsEffect={{
                        slideShadows: true, // Enable shadows for a more dynamic look
                        perSlideRotate: 1, // Rotate each card slightly
                        perSlideOffset: 7, // Space between cards
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={false}
                    modules={[Scrollbar, Navigation, Autoplay, EffectCards]} // Ensure EffectCube is included
                    className="mySwiper"
                    style={{
                        margin: isDesktop && '0 -7.5vw 5rem 0',
                        width: isDesktop ? '90%' : '80%', // Adjust based on your container
                        maxWidth: !isDesktop && '400px', // Restrict size to fit the design
                        height:isDesktop ? '75dvh' : '37rem',
                    }}
                >
                    {dataToDisplay.map((blog) => (
                        <SwiperSlide 
                        key={blog.id}
                        style={{
                            borderRadius: '24px',
                        }}>
                            <LandingBlogBox blog={blog} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="btn w-48 btn-outline rounded-3xl text-base border-accentNormal text-accentNormal hover:bg-accentNormal hover:text-primaryLightHover hover:border-none self-center mb-16
                md:self-center md:mr-[10rem] md:-mt-20">
                    <ArrowForwardIcon />
                    مشاهده بیشتر
                </button>
                
                <style jsx>{`
                    .mySwiper .swiper {
                        height: 10px; /* Adjust the height of the scrollbar */
                        border-radius: 16px;
                    }

                `}</style>
            </div>
        </div>
    );
};

export default ArticleSlider;
