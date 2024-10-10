'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// styles
import arrowIcon from '@/Assets/Icons/arrowGreen.svg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// custom
import '@/styles/Swiper.css'

// Import required modules
import { Scrollbar, Navigation, Autoplay  } from 'swiper/modules';
import { useBlogs } from '@/utils/Api/useArticles';
import BlogBox from '@/components/module/Landing/BlogBox';
import { fakeApi } from '@/utils/FakeApiBackup';
import { useMediaQuery } from "@mui/material";
import Image from 'next/image';


const ArticleSlider = () => {

    const isDesktop = useMediaQuery('(min-width:720px)');
    const pageNumber = 1;
    const pageSize = 10;

    const { data, error, isLoading } = useBlogs(pageSize, pageNumber);

    if (isLoading) return <p>Loading...</p>;

    
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
                delay: 2000, // Time between slides (in ms)
                disableOnInteraction: false, // Keeps autoplay running even when users interact
                pauseOnMouseEnter: true, // Pauses autoplay when user hovers over the slider
                reverseDirection: true
            }}
            navigation={true}
            modules={[Scrollbar, Navigation, Autoplay]}
            className="mySwiper"
            >
                {
                data?.data.map((blog) => ( 
                    <SwiperSlide key={blog.id}>
                        <BlogBox blog={blog} />
                    </SwiperSlide>
                ))
                }
                {
                    error && 
                    fakeApi?.data.map((blog) => ( 
                        <SwiperSlide key={blog.id}>
                            <BlogBox blog={blog} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className="btn w-48 btn-outline rounded-3xl text-base border-accentNormal text-accentNormal hover:bg-primaryNormal hover:text-accentNormal self-center
            md:self-start md:mr-[10rem] md:-mt-16" >
                <Image src={arrowIcon} alt='icon' ></Image>
                مشاهده بیشتر
            </button>   
        </div>
    );
};

export default ArticleSlider;