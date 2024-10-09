'use client'
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
import { Scrollbar, Navigation  } from 'swiper/modules';
import { useBlogs } from '@/utils/Api/useArticles';
import BlogBox from '@/components/module/Landing/BlogBox';


const ArticleSlider = () => {

    const pageNumber = 1;
    const pageSize = 10;

    const { data, error, isLoading } = useBlogs(pageSize, pageNumber);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    
    if(data) return (
        <div className='w-full py-10'>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{
                hide: false,
                draggable: true,
                dragSize: 50,
            }}
            navigation={true}
            modules={[Scrollbar, Navigation]}
            className="mySwiper"
            >
                {
                data?.data.map((blog) => ( 
                    <SwiperSlide key={blog.id}>
                        <BlogBox blog={blog} />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    );
};

export default ArticleSlider;