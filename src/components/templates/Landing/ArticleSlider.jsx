'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowIcon from '@/Assets/Icons/arrowGreen.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// custom
import '@/styles/Swiper.css';

// Import required modules
import { Scrollbar, Navigation, Autoplay } from 'swiper/modules';
import BlogBox from '@/components/module/Landing/BlogBox';
import { useMediaQuery } from "@mui/material";
import Image from 'next/image';
import { fakeApi } from '@/utils/FakeApiBackup';

const ArticleSlider = ({blogsData}) => {


    const dataToDisplay = blogsData?.data || fakeApi?.data || [];

    console.log(blogsData)

    return (
        <div className='w-full py-10 flex flex-col items-center gap-y-8'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{
                    hide: false,
                    draggable: true,
                    dragSize: 50 ,
                }}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true
                }}
                navigation={true}
                modules={[Scrollbar, Navigation, Autoplay]}
                className="mySwiper"
            >
                {dataToDisplay.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <BlogBox blog={blog} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="btn w-48 btn-outline rounded-3xl text-base border-accentNormal text-accentNormal hover:bg-primaryNormal hover:text-accentNormal self-center
                md:self-start md:mr-[10rem] md:-mt-16">
                <Image src={arrowIcon} alt='icon'></Image>
                مشاهده بیشتر
            </button>
        </div>
    );
};

export default ArticleSlider;
